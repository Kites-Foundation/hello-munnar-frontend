import React, { useState } from "react";

const TruncatedText = ({ content, maxLength, className }) => {
    const [showFull, setShowFull] = useState(false);
    return (
        <div className={className}>
            {content.length > maxLength && !showFull ? (
                <>{content.substr(0, maxLength)}...</>
            ) : (
                content
            )}
            {content.length > maxLength && (
                <button
                    className="font-semibold ml-2 focus:outline-none"
                    onClick={() => setShowFull((c) => !c)}>
                    read {showFull ? "less" : "more"}
                </button>
            )}
        </div>
    );
};

export default TruncatedText;
