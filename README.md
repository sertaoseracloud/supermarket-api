Com certeza! Segue uma sugestão de **documentação de enunciado** para um projeto de modernização de sistema, com base no cenário apresentado:

---

# **Enunciado do Projeto de Modernização de Sistema**

## **Contexto Geral**

O cliente é uma rede supermercadista com mais de 200 filiais distribuídas no estado do Pará. Atualmente, o principal sistema operacional da empresa é uma **API monolítica**, hospedada em ambiente **on premises** (servidores locais), responsável por integrar diferentes setores do negócio, em especial o **Ponto de Venda (PDV)** de cada supermercado e o **sistema de pontuação (fidelidade)** dos clientes.

Este monolito foi originalmente desenvolvido por um profissional amigo do dono da rede, que atualmente não está mais disponível para prestar suporte ou manutenção técnica ao sistema.

## **Situação Atual**

* **API Monolito:**
  Sistema centralizado e monolítico, operando em infraestrutura local, responsável por toda a lógica de integração com o PDV e o clube de fidelidade.

* **Integração com PDVs:**
  Todas as operações de compra realizadas nos caixas dos supermercados se comunicam diretamente com essa API para validação e registro de vendas.

* **Sistema de Pontuação:**
  A API também faz o controle de pontuação dos clientes no programa de fidelidade, atribuindo pontos conforme as compras realizadas.

* **Alta Concurrency:**
  O sistema processa, em média, **3.450 compras por minuto**, de forma paralela, oriundas das mais de 200 filiais.

* **Equipe Técnica:**
  Não há equipe de desenvolvimento dedicada para suporte e evolução do sistema. O conhecimento técnico está centralizado no desenvolvedor original, que não está mais acessível.

## **Desafios Identificados**

* **Risco Operacional:**
  Ausência de suporte técnico e documentação adequada representa um risco elevado à continuidade do negócio.
* **Escalabilidade:**
  A solução monolítica, on premises, apresenta limitações para crescimento e adaptação a novas demandas.
* **Manutenção e Evolução:**
  A complexidade e centralização do código dificultam correções, melhorias e integração com novas tecnologias.
* **Confiabilidade:**
  Uma falha no monolito pode comprometer a operação de todas as filiais simultaneamente.

## **Objetivo da Modernização**

Modernizar a arquitetura do sistema atual, migrando gradativamente para uma solução baseada em microsserviços, hospedada em ambiente de nuvem, com foco em:

* **Alta disponibilidade**
* **Escalabilidade horizontal**
* **Manutenibilidade e suporte**
* **Facilidade de integração com novos serviços**

## **Escopo Inicial da Modernização**

1. **Diagnóstico detalhado do monolito atual**:
   Levantamento das integrações, fluxos críticos e mapeamento dos domínios do negócio.

2. **Desenvolvimento de um plano de migração incremental**:
   Priorizando módulos com maior risco operacional e impacto no negócio (PDV e fidelidade).

3. **Implementação de infraestrutura em nuvem**:
   Garantindo alta disponibilidade e resiliência.

4. **Criação de documentação técnica e treinamento de equipe interna**.

---

### **Resumo do cenário**

* +200 filiais integradas
* 3.450 compras/minuto processadas paralelamente
* Monolito on premises sem suporte
* Impacto direto no PDV e no clube de fidelidade

---

## **Stack Tecnológica Atual**

* **Backend:**
  API monolítica desenvolvida em **Node.js** com o framework **NestJS**.

* **Banco de Dados:**
  **PostgreSQL** hospedado em ambiente **on premises** (servidores locais).

* **ORM:**
  **Prisma ORM** para acesso e modelagem dos dados.

* **Integração PDV:**
  Comunicação direta entre o sistema de PDV das filiais e a API central.

* **Sistema de Fidelidade:**
  Gerenciado pela mesma API monolítica, que controla o acúmulo e o resgate de pontos dos clientes.

* **Infraestrutura:**
  Toda a solução está hospedada em servidores locais da própria empresa, sem uso de serviços em nuvem.

---


