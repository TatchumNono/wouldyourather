let users = {
  sarahedo: {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_ceMPdXaOgqSuRyvhuidswtXMUdv4G_2Yw&usqp=CAU",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  tylermcginnis: {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    avatarURL:
      "data:image/png;base64,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",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  johndoe: {
    id: "johndoe",
    name: "John Doe",
    avatarURL:
      "data:image/png;base64,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",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["sarahedo"],
      text: "have horrible short term memory",
    },
    optionTwo: {
      votes: [],
      text: "have horrible long term memory",
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "johndoe",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "become a superhero",
    },
    optionTwo: {
      votes: ["johndoe", "sarahedo"],
      text: "become a supervillain",
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "sarahedo",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "be telekinetic",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be telepathic",
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "tylermcginnis",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "be a front-end developer",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be a back-end developer",
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "tylermcginnis",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["tylermcginnis"],
      text: "find $50 yourself",
    },
    optionTwo: {
      votes: ["johndoe"],
      text: "have your best friend find $500",
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "johndoe",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["johndoe"],
      text: "write JavaScript",
    },
    optionTwo: {
      votes: ["tylermcginnis"],
      text: "write Swift",
    },
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      res();
    }, 500);
  });
}
