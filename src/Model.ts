import {action, observable, makeObservable, computed} from "mobx"
import {api_response} from "./lib/gate/interfaces"

export class Model {
  constructor() {
    makeObservable(this)
  }

  @observable
  public user: api_response.User = {name: ``, tel: ``, mail: ``, securityPolitics: false}

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
    if (this.user.name.length < 2) error = true
    return error
  }
}
