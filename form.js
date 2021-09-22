import React from 'react'

export default function form() {
    return (

        <div class="row">
            <div class="col-md-6 mb-4">
                <form>

                    <div class="form-outline mb-4">
                        <input
                            type="email"
                            id="form2Example1"
                            class="form-control"
                            autocomplete="off"
                            style="
                              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAUBJREFUOBGVVE2ORUAQLvIS4gwzEysHkHgnkMiEc4zEJXCMNwtWTmDh3UGcYoaFhZUFCzFVnu4wIaiE+vvq6+6qTgthGH6O4/jA7x1OiCAIPwj7CoLgSXDxSjEVzAt9k01CBKdWfsFf/2WNuEwc2YqigKZpK9glAlVVwTTNbQJZlnlCkiTAZnF/mePB2biRdhwHdF2HJEmgaRrwPA+qqoI4jle5/8XkXzrCFoHg+/5ICdpm13UTho7Q9/0WnsfwiL/ouHwHrJgQR8WEwVG+oXpMPaDAkdzvd7AsC8qyhCiKJjiRnCKwbRsMw9hcQ5zv9maSBeu6hjRNYRgGFuKaCNwjkjzPoSiK1d1gDDecQobOBwswzabD/D3Np7AHOIrvNpHmPI+Kc2RZBm3bcp8wuwSIot7QQ0PznoR6wYSK0Xb/AGVLcWwc7Ng3AAAAAElFTkSuQmCC');
                              background-repeat: no-repeat;
                              background-attachment: scroll;
                              background-size: 16px 18px;
                              background-position: 98% 50%;
                              "
                        />
                        <label
                            class="form-label"
                            for="form2Example1"
                            style="margin-left: 0px"
                        >Email address</label
                        >
                        <div class="form-notch">
                            <div class="form-notch-leading" style="width: 9px"></div>
                            <div
                                class="form-notch-middle"
                                style="width: 88.8px"
                            ></div>
                            <div class="form-notch-trailing"></div>
                        </div>
                    </div>


                    <div class="form-outline mb-4">
                        <input
                            type="password"
                            id="form2Example2"
                            class="form-control"
                            autocomplete="off"
                            style="
                              background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAUBJREFUOBGVVE2ORUAQLvIS4gwzEysHkHgnkMiEc4zEJXCMNwtWTmDh3UGcYoaFhZUFCzFVnu4wIaiE+vvq6+6qTgthGH6O4/jA7x1OiCAIPwj7CoLgSXDxSjEVzAt9k01CBKdWfsFf/2WNuEwc2YqigKZpK9glAlVVwTTNbQJZlnlCkiTAZnF/mePB2biRdhwHdF2HJEmgaRrwPA+qqoI4jle5/8XkXzrCFoHg+/5ICdpm13UTho7Q9/0WnsfwiL/ouHwHrJgQR8WEwVG+oXpMPaDAkdzvd7AsC8qyhCiKJjiRnCKwbRsMw9hcQ5zv9maSBeu6hjRNYRgGFuKaCNwjkjzPoSiK1d1gDDecQobOBwswzabD/D3Np7AHOIrvNpHmPI+Kc2RZBm3bcp8wuwSIot7QQ0PznoR6wYSK0Xb/AGVLcWwc7Ng3AAAAAElFTkSuQmCC');
                              background-repeat: no-repeat;
                              background-attachment: scroll;
                              background-size: 16px 18px;
                              background-position: 98% 50%;
                              "
                        />
                        <label
                            class="form-label"
                            for="form2Example2"
                            style="margin-left: 0px"
                        >Password</label
                        >
                        <div class="form-notch">
                            <div class="form-notch-leading" style="width: 9px"></div>
                            <div class="form-notch-middle" style="width: 64px"></div>
                            <div class="form-notch-trailing"></div>
                        </div>
                    </div>


                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">

                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="form2Example3"
                                    checked=""
                                />
                                <label class="form-check-label" for="form2Example3">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div class="col">

                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>


                    <button type="submit" class="btn btn-primary btn-block mb-4">
                        Sign in
                    </button>


                    <div class="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
                        <p>or sign up with:</p>
                        <button
                            type="button"
                            class="btn btn-primary btn-floating mx-1"
                        >
                            <i class="fab fa-facebook-f"></i>
                        </button>

                        <button
                            type="button"
                            class="btn btn-primary btn-floating mx-1"
                        >
                            <i class="fab fa-google"></i>
                        </button>

                        <button
                            type="button"
                            class="btn btn-primary btn-floating mx-1"
                        >
                            <i class="fab fa-twitter"></i>
                        </button>

                        <button
                            type="button"
                            class="btn btn-primary btn-floating mx-1"
                        >
                            <i class="fab fa-github"></i>
                        </button>
                    </div>
                </form>
            </div>
            <a href="">
              <span><i class="fas fa-envelope fa-lg"></i></span>
              <span class="badge rounded-pill badge-notification bg-danger"
                    >1</span
                >
            </a>
        </div>
    )
}
