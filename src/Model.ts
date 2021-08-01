import {action, observable, makeObservable, computed} from "mobx"
import {User} from "./lib/gate/interfaces"

export class Model {
  constructor() {
    makeObservable(this)
  }

  @observable
  public user: User = {name: ``, tel: ``, mail: ``, securityPolitics: false}

  @observable
  public isSubmit: boolean = false

  @observable
  public textError: string = ``

  @action.bound
  public submit(e) {
    e.preventDefault()
    this.isSubmit = true
  }

  @action.bound
  public getUserName(event) {
    const text = event.target.value
    this.user.name = text
  }

  @action.bound
  public getUserPhone(event) {
    const text = event.target.value
    let num = Number(text)
    if (Number.isInteger(num)) {
      this.user.tel = text
    }
  }

  @action.bound
  public getUserMail(event) {
    const text = event.target.value
    this.user.mail = text
  }

  @action.bound
  public getSecurityPolitics(event) {
    const text = event.target.checked
    this.user.securityPolitics = text
  }

  // validation form
  @computed
  public get userError() {
    let error: boolean = false
    if (this.user.name.length < 2 && this.isSubmit) error = true
    return error
  }

  @computed
  public get telError() {
    let error: boolean = false
    if (this.user.tel.length < 10 && this.isSubmit) error = true
    return error
  }

  @computed
  public get mailError() {
    let error: boolean = false
    const emailValid = this.user.mail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    if (!emailValid && this.isSubmit) {
      error = true
    }

    return error
  }

  @computed
  public get securityPoliticsError() {
    let error: boolean = false
    if (!this.user.securityPolitics && this.isSubmit) {
      error = true
    }
    return error
  }

  @computed
  public get errorMessage() {
    const errorsMessage = {
      user: `Имя должно содержать больше двух символов.
      `,
      tel: `Номер телефона должен содержать не меньше 10 символов только цифры.
      `,
      mail: `Не верный формат электронной почты
      `,
      securityPolitics: `Вы не согласились на передачу персональных данных`
    }
    let resultText: string = ""

    const key = Object.keys(errorsMessage)
    key.forEach((element) => {
      if (this[`${element}Error`]) {
        resultText = resultText.concat(errorsMessage[element])
      }
    })

    return resultText
  }

  // validation form
}

const model = new Model()

export default model
