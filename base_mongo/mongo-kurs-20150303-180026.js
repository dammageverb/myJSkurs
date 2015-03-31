
/** maintexts indexes **/
db.getCollection("maintexts").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** maintexts indexes **/
db.getCollection("maintexts").ensureIndex({
  "name": NumberInt(1)
},{
  "unique": true
});

/** maintexts indexes **/
db.getCollection("maintexts").ensureIndex({
  "url": NumberInt(1)
},{
  "unique": true
});

/** maintexts records **/
db.getCollection("maintexts").insert({
  "_id": ObjectId("54f5c486e2a6b72427db3cca"),
  "name": "Наши контакты",
  "body": "Тут указаны контакты для связи с нами",
  "url": "contacts",
  "__v": NumberInt(0)
});
db.getCollection("maintexts").insert({
  "_id": ObjectId("54f5c4e06b36ae5c291d7999"),
  "name": "Зачем нужен JS",
  "body": "Давайте разберемся, для чего мы изучаем JS",
  "url": "whyneedjs",
  "__v": NumberInt(0)
});
db.getCollection("maintexts").insert({
  "_id": ObjectId("54f5bd7fd1cf8da4232ccc31"),
  "name": "Вы зашли на главную страницу нашего сайта",
  "body": "Вы находитесь на главной странице сайта, посвященного обучению JS",
  "url": "main",
  "__v": NumberInt(0)
});
db.getCollection("maintexts").insert({
  "_id": ObjectId("54f5c7b0586bd5341cca5412"),
  "name": "Наши занятия:",
  "body": "Тут мы обсудим темы, которые проходили на занятиях",
  "url": "ourlessons",
  "__v": NumberInt(0)
});
db.getCollection("maintexts").insert({
  "_id": ObjectId("54f5c87ecb61c01828fae918"),
  "name": "Итоги занятий",
  "body": "Подведем итоги наших занятий",
  "url": "whatlearn",
  "__v": NumberInt(0)
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "kurs.maintexts"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "unique": true,
  "key": {
    "name": NumberInt(1)
  },
  "name": "name_1",
  "ns": "kurs.maintexts",
  "background": true,
  "safe": null
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "unique": true,
  "key": {
    "url": NumberInt(1)
  },
  "name": "url_1",
  "ns": "kurs.maintexts",
  "background": true,
  "safe": null
});
