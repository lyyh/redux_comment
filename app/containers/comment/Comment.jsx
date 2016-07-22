import React from 'react';
import ComHeader from '../../components/comment_header/ComHeader';
import ComContent from '../../components/comment_content/ComContent';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Comment';
    }
    render() {
        return (
        	<section>
        		<ComHeader/>
        		<ComContent/>
            </section>
        );
    }
}

export default Comment;
