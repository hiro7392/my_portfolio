import React from 'react';

export type IContent = {
    content: JSX.Element;
};

const Contentbox: React.FC<IContent> = (props) => {
    return (
        <div className="Content-box Text">
            { props.content }
        </div>
    )
}

export default Contentbox;
