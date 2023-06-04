import { validateForms } from '../functions/validate-forms';

const rules = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите название'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите телефон'
      }
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите Email'
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Введите корректный Email'
      },
    ]
  },
  {
    ruleSelector: '.textarea',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите свой вопрос'
      }
    ]
  },
];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

validateForms('.form', rules);  // afterForm
