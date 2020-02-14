"use strict";

import { BaseService } from "./base";
import WebUrlUtility from "./WebUrlUtility";
/**
 * @description This will handle the user related network requests.
 */
class UserService extends BaseService {
  constructor() {
    super();
    this.prefix = "users";
  }

  /**
   * @description This function will call the login api with email and password.
   */
  login = user => {
    console.log("Request" + `${this.base}${WebUrlUtility.login}`);
    return this.webServiceCall(`${this.base}${WebUrlUtility.login}`, user, 1)
      .then(response => {
        console.log("response : ",response)
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  };

  /**
   * @description - This Service will return the user details
   */
  profile = () => {
    return this.webServiceCall(`${this.base}`, {}, 0)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  };

  /**
   * @description - This service will create a new user and default organisation and store for the same user
   */
  signup = user => {
    console.log("user :",user)
    console.log("Request" + `${this.base}${WebUrlUtility.register}`);
    return this.webServiceCall(
      `${this.base}${WebUrlUtility.register}`,
      user,
      1
    )
      .then(response => {
        console.log("data : " + response);
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  };
}

const userService = new UserService();

export default userService;
export { userService, UserService };