import React from "react";
import TodoCard from "./TodoCard";

export default function TodoContainer({ activities, className = "" }) {
    return (
        <section className={className}>
            {activities?.length > 0 && (
                <>
                    <h2 className="px-8 md:px-10 font-semibold text-black text-xl">
                        Things To Do
                    </h2>

                    <div className="flex overflow-x-auto py-6 md:py-12 px-8 md:px-10">
                        {activities.map((activity, id) => (
                            <TodoCard key={id} data={activity} />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}
