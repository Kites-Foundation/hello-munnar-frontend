import { useRoutes } from "hookrouter";
import React from "react";
import Home from "../components/home/Home";

const routes = {
  "/": () => <Home />,
};

export default function PublicRouter() {
  const pages = useRoutes(routes);
  return <div className="w-screen flex flex-col min-h-screen">{pages}</div>;
}
