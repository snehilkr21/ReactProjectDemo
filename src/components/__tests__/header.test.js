import { render } from "@testing-library/react"
import Header from "../Header"
import {StaticRouter} from "react-router-dom/server"
import {Provider} from "react-redux"
import store from "../../utils/store"

test("logo should load when we render the header",()=>{

    //load header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
              <Header/>
            </Provider>
        </StaticRouter>
    )
    const logo1 = header.getAllByTestId("logo");
    expect(logo1[0].src).toBe("http://localhost/dummyLogo.png");
    //check if logo is loaded
})

test("Cart should contain 0 item when we render the header",()=>{

    //load header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
              <Header/>
            </Provider>
        </StaticRouter>
    )
    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart 0");
    //check if logo is loaded
})