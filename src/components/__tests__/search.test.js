import {render, waitFor} from "@testing-library/react"
import { Provider } from "react-redux"
import Body from "../Body"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import {resturantData} from "../../mocks/dummyResturantData"
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json :()=>{
            return Promise.resolve(resturantData)
        }
    })
})
test("Shimmer load on home page" ,()=>{
    
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )
    const shimmer = body.getByTestId("shimmer")
    expect(shimmer).toBeInTheDocument()
    
})
test("Resturant list load on home page" , async ()=>{
    
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    )
    await waitFor(()=>expect(body.getByTestId("search-btn")))

    const restList = body.getByTestId("rest-list")
    expect(restList.children.length).toBe(15)
    
})