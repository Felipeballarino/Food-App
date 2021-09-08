//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Diet } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
  let vegetarianDiet = Diet.create({
    title: "Vegetarian",
  });

  let veganDiet = Diet.create({
    title: "Vegan",
  });

  let glutenFreeDiet = Diet.create({
    title: "Gluten free",
   
  });

  let paleoDiet = Diet.create({
    title: "Paleo",
    
  });

  let ketogenicDiet = Diet.create({
    title: "Ketogenic",
    
  });

  let lactoVegetarianDiet = Diet.create({
    title: "Lacto vegetarian",
  });

  let ovoVegetarianDiet = Diet.create({
    title: "Ovo vegetarian",
  });

  let pescetarianDiet = Diet.create({
    title: "Pescetarian",
  });

  let primalDiet = Diet.create({
    title: "Primal",
  });

  let whole30Diet = Diet.create({
    title: "Whole30",
  });

  Promise.all([vegetarianDiet, veganDiet, glutenFreeDiet, whole30Diet, primalDiet, pescetarianDiet, ovoVegetarianDiet, lactoVegetarianDiet, ketogenicDiet, paleoDiet])
    .then(res => {
      console.log("DIETAS CARGADAS");
    });
 });
