import { createElement } from "react";

export function UserFavoriteFoods() {
    return createElement('div', null,  <section>
        <span>favorite Food</span>
        <ul>
            <li>
                Sushi
            </li>
            <li>Pizza</li>
            <li>Mediterranean Food</li>
        </ul>
    </section>)
}