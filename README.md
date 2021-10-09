# CrudPessoa
Implementa uma versão completa do crud-pessoa baseado no material do professor Razer (http://www.razer.net.br/angular/)


## Requisitos
#### NODE.js (depende do SO):   
https://nodejs.org/pt-br/download/package-manager/

#### Angular CLI
- Com Node instalado:   
```
npm install -g @angular/cli
```

#### Ambiente JAVA (para o web service em Spring):
- JAVA 8 + Spring Boot + Maven
- Pode precisar de outras coisas (sei lá, se vira...)

## Rodando
1. Clone o repositório
```
git clone https://github.com/chsev/crud-pessoa.git
```
2. Instale as dependências com 
```
npm install
```
3. execute a aplicação Angular com    
```
ng serve --open
``` 
4. Ative o web service (do contrário o login não funciona)
```
cd usuario-rest-service
./mvnw spring-boot:run
```
- roda em localhost:8080
- teste com http://localhost:8080/usuarios

----


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
