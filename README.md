# GatewayApis

O GatewayApis é uma solução de gateway de API desenvolvida para facilitar o acesso e a distribuição correta de requisições para microsserviços específicos. Ele serve como ponto de entrada centralizado, permitindo que você acesse os endpoints de diferentes microsserviços através de uma única interface.

## Funcionalidades
* Distribuição de requisições: O GatewayApis encaminha as requisições recebidas para os microsserviços correspondentes com base noss endpoints especificados.
* Gerenciamento simplificado: Ao acessar o GatewayApis, você obtém uma visão geral dos microsserviços disponíveis e suas respectivas rotas.
* Roteamento dinâmico: O GatewayApis permite adicionar e configurar novos microsserviços facilmente, sem a necessidade de alterar o código principal.

## Configuração

Antes de executar o API Gateway, certifique-se de ter instalado as dependências necessárias. Você pode instalá-las usando o comando: `npm install`

Após a instalação das dependências, você pode iniciar o API Gateway com o seguinte comando: `npm start`

Isso iniciará o servidor do API Gateway na porta configurada (por padrão, a porta 6000).

## Dependências

- `express: ^4.18.2`
- `nodemon: ^2.0.22`
- `http-proxy-middleware: ^4.6.5`
