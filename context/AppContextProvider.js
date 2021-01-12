import {Context} from "./AppContext";
import React from 'react';

export default class AppContextProvider extends React.Component{
    state = {
        path: '/home',
        posts: getPosts(),
        // index: 0,
        // comments: getPosts()[1].comments
    }

    changePath = (path) => {
        this.setState({path})
    }

    addComment = (author, text, index) => {
        this.setState({index: index});
        this.setState({comments: [...this.state.posts[index].comments, {author, text}]})
        this.state.posts[index].comments = [...this.state.posts[index].comments, {author, text}];
    }

    submitHandler = (event) => {
        event.preventDefault();
        let index = +document.activeElement.id;
        this.addComment(event.target.inpAuthor.value, event.target.inpText.value, index);
        event.target.inpAuthor.value = '';
        event.target.inpText.value = '';
    }

    render(){
        return(
            <div className='container'>
                <Context.Provider value={{
                    path: this.state.path,
                    changePath: this.changePath,
                    posts: this.state.posts,
                    addComment: this.addComment,
                    submitHandler: this.submitHandler,
                    // comments: this.state.comments
                }}>
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}

function getPosts() {
    return JSON.parse(`
    [
  {
    "postId": "123",
    "date": "12/12/12",
    "author": "John Doe",
    "title":"Post about nothing",
    "shortDesc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac neque scelerisque, convallis sem in, eleifend lorem. Donec pretium massa congue porttitor accumsan. Integer semper magna eget purus porttitor vehicula. Nunc eleifend arcu at magna commodo, sed commodo nisi finibus. Donec semper interdum ante eget dapibus. Praesent commodo, nisi ac porttitor scelerisque, metus magna molestie ligula, sed semper nibh libero iaculis diam. Sed mattis massa nulla, vitae vestibulum libero efficitur et. Nulla at consectetur diam. Etiam felis dolor, pellentesque scelerisque tempor tincidunt, pharetra eget ex. Duis turpis est, euismod sed facilisis at, eleifend eu lectus.Fusce vulputate magna et imperdiet aliquet. Nullam et rhoncus erat. Nunc ante justo, vestibulum auctor purus eu, luctus aliquet justo. Nunc eu tellus tristique, elementum sem ut, tristique diam. Maecenas erat elit, efficitur in libero id, venenatis lacinia sem. Nam elementum felis a consequat aliquet. Suspendisse porta sapien nec massa aliquam, ac gravida nunc semper. Curabitur at eros et felis condimentum sollicitudin cursus eget nisl. Morbi sit amet quam nec felis interdum consequat. Donec in sem eu elit ornare porta ac tempus magna. Duis libero eros, egestas a erat in, euismod placerat orci. Mauris condimentum, odio ut tincidunt cursus, leo dolor fringilla nisi, quis egestas magna magna a lacus. Quisque interdum, orci vestibulum ultrices dapibus, elit tellus pulvinar velit, ac semper ipsum enim quis tellus. Sed a tincidunt magna.",
    "comments": [
      {
        "author": "Tony Stark",
        "text": "Contrary to popular belief, Lorem Ipsum is not simply random text."
      },
      {
        "author": "Jack Sparrow",
        "text": "Contrary to popular belief, Lorem Ipsum is not simply random text."
      }
    ]
  },
  {
    "postId": "678",
    "date": "01/01/2020",
    "author": "Jack Sparrow",
    "title":"Pirates life",
    "shortDesc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac neque scelerisque, convallis sem in, eleifend lorem. Donec pretium massa congue porttitor accumsan. Integer semper magna eget purus porttitor vehicula. Nunc eleifend arcu at magna commodo, sed commodo nisi finibus. Donec semper interdum ante eget dapibus. Praesent commodo, nisi ac porttitor scelerisque, metus magna molestie ligula, sed semper nibh libero iaculis diam. Sed mattis massa nulla, vitae vestibulum libero efficitur et. Nulla at consectetur diam. Etiam felis dolor, pellentesque scelerisque tempor tincidunt, pharetra eget ex. Duis turpis est, euismod sed facilisis at, eleifend eu lectus.Fusce vulputate magna et imperdiet aliquet. Nullam et rhoncus erat. Nunc ante justo, vestibulum auctor purus eu, luctus aliquet justo. Nunc eu tellus tristique, elementum sem ut, tristique diam. Maecenas erat elit, efficitur in libero id, venenatis lacinia sem. Nam elementum felis a consequat aliquet. Suspendisse porta sapien nec massa aliquam, ac gravida nunc semper. Curabitur at eros et felis condimentum sollicitudin cursus eget nisl. Morbi sit amet quam nec felis interdum consequat. Donec in sem eu elit ornare porta ac tempus magna. Duis libero eros, egestas a erat in, euismod placerat orci. Mauris condimentum, odio ut tincidunt cursus, leo dolor fringilla nisi, quis egestas magna magna a lacus. Quisque interdum, orci vestibulum ultrices dapibus, elit tellus pulvinar velit, ac semper ipsum enim quis tellus. Sed a tincidunt magna.",
    "comments": []
  },
  {
    "postId": "777",
    "date": "12/02/2020",
    "author": "Tony Stark",
    "title":"Iron Man it's not a hobby",
    "shortDesc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac neque scelerisque, convallis sem in, eleifend lorem. Donec pretium massa congue porttitor accumsan. Integer semper magna eget purus porttitor vehicula. Nunc eleifend arcu at magna commodo, sed commodo nisi finibus. Donec semper interdum ante eget dapibus. Praesent commodo, nisi ac porttitor scelerisque, metus magna molestie ligula, sed semper nibh libero iaculis diam. Sed mattis massa nulla, vitae vestibulum libero efficitur et. Nulla at consectetur diam. Etiam felis dolor, pellentesque scelerisque tempor tincidunt, pharetra eget ex. Duis turpis est, euismod sed facilisis at, eleifend eu lectus.Fusce vulputate magna et imperdiet aliquet. Nullam et rhoncus erat. Nunc ante justo, vestibulum auctor purus eu, luctus aliquet justo. Nunc eu tellus tristique, elementum sem ut, tristique diam. Maecenas erat elit, efficitur in libero id, venenatis lacinia sem. Nam elementum felis a consequat aliquet. Suspendisse porta sapien nec massa aliquam, ac gravida nunc semper. Curabitur at eros et felis condimentum sollicitudin cursus eget nisl. Morbi sit amet quam nec felis interdum consequat. Donec in sem eu elit ornare porta ac tempus magna. Duis libero eros, egestas a erat in, euismod placerat orci. Mauris condimentum, odio ut tincidunt cursus, leo dolor fringilla nisi, quis egestas magna magna a lacus. Quisque interdum, orci vestibulum ultrices dapibus, elit tellus pulvinar velit, ac semper ipsum enim quis tellus. Sed a tincidunt magna.",
    "comments": [
        {
            "author": "Captain America",
            "text": "Yes i agree with you bro"
        },
        {
            "author": "Thor",
            "text": "Stop! Ragnarok is comming!"
        },
        {
            "author": "Hulk",
            "text": "Wreck!"
        }
    ]
  }
]
    `);
}