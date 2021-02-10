import React from "react";
import TodoCard from "./TodoCard";

export default function TodoContainer({ todos, className = "" }) {
    return (
        <section className={className}>
            <h2 className="px-8 md:px-10 font-semibold text-black text-xl my-1">
                Things To Do
            </h2>

            <div className="flex overflow-x-auto py-12 px-8 md:px-10">
                {todos.map((todo) => (
                    <TodoCard key={todo.name} data={todo} />
                ))}
            </div>
        </section>
    );
}
