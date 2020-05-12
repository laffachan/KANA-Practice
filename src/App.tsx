import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Revision from "./Revision";
import Practice from "./Practice";
import { hiragana, katakana } from "./kana";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <div
        className="max-w-screen-sm mx-auto flex flex-col min-h-screen divide-y divide-gray-400 "
        style={{ minHeight: "-webkit-fill-available" }}
      >
        <div className="flex-grow">
          <div className="container mx-auto flex p-4 justify-between border-b">
            <Link to="/">
              <div>
                <span role="img" aria-label="">
                  ⛩️
                </span>{" "}
                KANA Practice
              </div>
            </Link>
            <Link to="/revision">
              <div>
                <span role="img" aria-label="">
                  📔
                </span>{" "}
                Kana List
              </div>
            </Link>
          </div>
          <Switch>
            <Route path="/hiragana">
              <Practice data={hiragana} />
            </Route>
            <Route path="/katakana">
              <Practice data={katakana} />
            </Route>
            <Route path="/revision">
              <Revision />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <footer className="container mx-auto w-full text-right p-4 pin-b text-sm">
          <div>By Laffachan</div>
        </footer>
      </div>
    </Router>
  );
}
