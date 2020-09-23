# crud-polen-2020-processoSeletivo
CRUD (HTML5 LocalStorage e JSON)
# crud-polen
CRUD 
- HTML5 LocalStorage JSON -
CRUD realizado a fim de concorrer a vaga de estágio da Polen (processo seletivo 2020)
Utilizando LocalStorage, é possível realizar as operações Adicionar, Editar, Excluir, Recuperar e Listar dados após refresh.

Funções que merecem atenção JS:

localStorage
  localStorage.setItem(name, value): função que armazena os dados no LocalStorage, cada objeto é guardado e referênciado em um nome chave.
  localStorage.getItem(name): função que permite recuperar o valor guardado pelo nome do elemento chave. 

JSON
JSON.stringfy(object): afim de armazenar a informação, essa função transforma um objeto em uma string.
JSON.parse(object): a função transforma a string em objeto novamente

Variáveis :
  op
    utilizidada para definir se o user está realizando uma adição de informação ou somente editando um dos registros.
  
  selected_index 
    Serve para referenciar um registro da tabela. 
   
   tbOngs
    indice > para referenciarmos o registro selecionado na tabela, iniciamos com o valor recuperado do local storage (salvo com a chave “tabelaOngs”)

Operações 
    AdicionarONG
    ExcluirONG
    EditarONG
    ListarONG



REFERÊNCIAS PARA O PROJETO
https://www.w3schools.com/html/html5_webstorage.asp
https://developer.mozilla.org/pt-BR/docs/Web/API/Window/Window.localStorage
http://mrbool.com/creating-a-crud-form-with-html5-local-storage-and-json/26719
https://medium.com/jaguaribetech/dlskaddaldkslkdlskdlk-333dae8ef9b8
https://www.youtube.com/watch?v=qFHZsgW7nYI&ab_channel=HiteshChoudhary (CRUD in local storage in javascript)
https://www.youtube.com/watch?v=NYZAwZ4rVqc&t=148s&ab_channel=VasudevKumaran (Create - Retrieve - Update - Delete (CRUD) using localStorage - Part 1)
https://www.youtube.com/watch?v=LyVI5witXHA&ab_channel=VasudevKumaran (Create - Retrieve - Update - Delete (CRUD) using localStorage - Part 2)
https://www.youtube.com/watch?v=aC6cp5D0bvA&t=2328s&ab_channel=CodingCurry (Todo List application in JavaScript 2020 || CRUD operation in Javascript || Uses of local storage)
https://www.youtube.com/watch?v=ehNjAavPy5A&ab_channel=Salvandoelsemestre (Javascript CRUD | ALL OPERATIONS | LOCALSTORAGE)
https://github.com/juliocesar-io/crud-js-localStorage
https://github.com/hitokuno/HTML5-CRUD-localstorage
https://anexsoft.com/ejemplo-de-crud-usando-localstorage-de-html-5
https://docs.telerik.com/kendo-ui/knowledge-base/grid-localstorage-crud
https://dev.to/sarah_chima/using-the-local-storage-fn8
