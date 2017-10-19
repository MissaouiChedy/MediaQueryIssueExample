import React from 'react';

export default class extends React.Component {
    render() {
      const onMobile = '@media screen and (max-width: 320px)';
      return (<div>
            <p>Welcome to next.js!</p>
            <style jsx>
            {`
                p {
                    color: red;
                }

                ${onMobile} {
                    p {
                        color: blue;
                    }
                }
                /*
                 This works:
                 @media screen and (max-width: 320px) {
                    p {
                        color: blue;
                    }
                 }
                 */

            `}
            </style>
        </div>);  
    }
}
