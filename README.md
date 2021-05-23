# Teste Mova Front end

A atividade proposta é de criar um projeto integrado com a api (https://restcountries.eu/#api-endpoints-code) que lista países.

## Funcionalidades:
Selecionar um tipo de filtro: Região, Capital, Lingua, País, Código de ligação. Default País. Esse select define as propriedades do segundo select e a url da requisição.  

Pesquisar por uma região(https://restcountries.eu/rest/v2/region/{region}) listar na tela as bandeiras(campo flag) de todos os países dessa região. Paginar de 10 em 10  

	* Pesquisar pela lingua( https://restcountries.eu/rest/v2/lang/{et} ) exibir as bandeiras de todos os países com essa lingua. Paginar de 10 em 10
	* Pesquisar por um país, exibir apenas a bandeira desse país(https://restcountries.eu/rest/v2/alpha/{currency})
	* Pesquisar pelo código de ligação( https://restcountries.eu/rest/v2/region/{region} )
  * Ao clicar na bandeira abre uma nova página(Tela 2) com mais informações do país( https://restcountries.eu/rest/v2/alpha/{currency} ):
      1. imagem da bandeira(flag)
      2. name
      3. capital
      4. region -> Ao clicar na região o usuário deve ser redirecionado para a tela 1 com essa região selecionada
      5. subregion
      6. population
      7. languages.nativeName
      8. Lista com as bandeiras dos vizinhos(borders). Essas bandeiras são clicáveis e leva para uma nova página com detalhes do país clicado.
   
 ---
 
## Sobre as telas:
https://www.figma.com/file/Dej8zw0w0WiRid4moOmNuV/Prova-Incluir-Tecnologia---Frontend?node-id=0%3A1&viewport=321%2C379%2C0.07089027017354965
