import * as rls from "readline-sync";

let dados : number = rls.questionInt("Cuantos dados?: ");

console.log("Si tiras "+ dados+" dados, tenes un porcentaje de sacar 6 es de 1/" + 6**dados);