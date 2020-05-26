const initialState = [
  {
    name: "Тест по JavaScript",
    id: 1,
    urlImg:
      "https://www.silversites.es/wp-content/uploads/2019/06/javascript.jpg",
    level: "Junior",
    listQuesions: [
      {
        question:
          "Какое ключевое слово позволяет создавать объекты общего вида",
        answerList: [
          { answerName: "Object", correct: true, select: false },
          { answerName: "this", correct: false, select: false },
          { answerName: "prototype", correct: false, select: false },
        ],
      },
      {
        question: "Какая функция позволяет очищать конечную анимацию:",
        answerList: [
          { answerName: "setInterval", correct: false, select: false },
          { answerName: "clearTimeout ", correct: true, select: false },
          { answerName: "setTimeout", correct: false, select: false },
        ],
      },
      {
        question: "Что, из ниже перечисленного, относится к событию",
        answerList: [
          {
            answerName: "начало загрузки web-страницы",
            correct: false,
            select: false,
          },
          {
            answerName: "сохранение кодировки пользователем",
            correct: false,
            select: false,
          },
          {
            answerName: "завершение загрузки web-страницы ",
            correct: true,
            select: false,
          },
        ],
      },
      {
        question:
          "Какой оператор служит для создания нового экземпляра из класса однотипных объектов",
        answerList: [
          { answerName: "Object", correct: true, select: false },
          { answerName: "this", correct: false, select: false },
          { answerName: "prototype", correct: false, select: false },
        ],
      },
      {
        question:
          "Какое ключевое слово позволяет создавать объекты общего вида",
        answerList: [
          { answerName: "this", correct: false, select: false },
          { answerName: "new", correct: true, select: false },
          { answerName: "Prototype", correct: false, select: false },
        ],
      },
      {
        question: "В какой строке создастся новый объект Array",
        answerList: [
          { answerName: "var pattern = /s&/", correct: false, select: false },
          {
            answerName: "var pattern = new Array[a,b,c]",
            correct: false,
            select: false,
          },
          {
            answerName: "var pattern = [a,b,c];",
            correct: true,
            select: false,
          },
        ],
      },
      {
        question:
          "Какой метод позволяет изменять порядок элементов массива на противоположный",
        answerList: [
          { answerName: "reverse()", correct: true, select: false },
          { answerName: "join()", correct: true, select: false },
          { answerName: "sort()", correct: false, select: false },
        ],
      },
      {
        question: "Что такое ECMAScript",
        answerList: [
          {
            answerName: "спецификация языка Javascript",
            correct: true,
            select: false,
          },
          {
            answerName: "новый язык программирования",
            correct: false,
            select: false,
          },
          {
            answerName: "переработанная реализация Javascript",
            correct: false,
            select: false,
          },
        ],
      },
      {
        question:
          "Объекты, отвечающие за то, что содержится на Web-странице в окне браузера, называются",
        answerList: [
          { answerName: "пользовательскими", correct: false, select: false },
          { answerName: "клиентскими ", correct: true, select: false },
          { answerName: "встроенными", correct: false, select: false },
        ],
      },
      {
        question: "Какие конструкции для циклов есть в javascript",
        answerList: [
          { answerName: "только одна: for", correct: false, select: false },
          {
            answerName: "три: for, while и do…while",
            correct: true,
            select: false,
          },
          {
            answerName: "только две: for и while",
            correct: false,
            select: false,
          },
        ],
      },
    ],
  },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "DEFAULT":
      return { ...state, ...payload };

    default:
      return state;
  }
};
