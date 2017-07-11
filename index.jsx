import React from 'react';
import {render} from 'react-dom';
import { createStore,bindActionCreators } from 'redux';
import { Provider ,connect} from 'react-redux';
import Button from 'grommet/components/Button';
import 'grommet/grommet-hpe.min.css'
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Paragraph from 'grommet/components/Paragraph';
import Bus from 'grommet/components/icons/base/Bus';
import FingerPrint from 'grommet/components/icons/base/FingerPrint';
import BrandHpeStack from 'grommet/components/icons/base/BrandHpeStack';
import Footer from 'grommet/components/Footer';

//reducer
const initialState = {
    text: 'Hello Grommet'
}
//action
function changeText(){
    return {
        type:'CHANGE_TEXT'
    }
}

function buttonClick(){
    return {
        type:'BUTTON_CLICK'
    }
}


function myApp(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TEXT':
            return {
                text:state.text=='Hello Grommet'?'Hello ReactJs':'Hello Grommet'
            }
        case 'BUTTON_CLICK':
            return {
                text: 'You just click button'
            }
        default:
          return {
            text:'Hello Grommet'
        };
    }
}

//store
let store = createStore(myApp);


class Hello extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.actions.changeText();
    }

    render() {
        return (
            <h1 onClick={this.handleClick}> {this.props.text} </h1>
        );
    }
}

class Change extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.actions.buttonClick();
    }

    render() {
        return (
            <Button icon={<FingerPrint /> } label='Button' onClick={this.handleClick} />
        );
    }
}

class Change2 extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.actions.changeText();
    }

    render() {
        return (
            <Button icon={<FingerPrint />  } label='Change' onClick={this.handleClick} />
        );
    }
}

class App extends React.Component{

    constructor(props) {
        super(props);
        this.onchange = this.onchange.bind(this);
    }

    onchange(event){
        this.props.sta=event.target.value;
    }

    render() {
        const { actions, text} = this.props;
        return (
            <div>
                <Section pad='large'
                         justify='center'
                         align='center'
                         colorIndex='grey-4'>
                <Header splash={false}
                        fixed={false}>
                    <Title>
                        Demo KeyWord
                    </Title>
                    <Box flex={true}
                         justify='end'
                         direction='row'
                         responsive={false}>
                        <Search inline={true}
                                fill={true}
                                size='medium'
                                placeHolder='Search'
                                dropAlign={{"right": "right"}}
                                onDOMChange={this.onchange}/>
                        <Menu icon={<Bus />}
                              dropAlign={{"right": "right"}}>
                        </Menu>
                    </Box>
                </Header>
                </Section>

                <Section pad='large'
                         justify='center'
                         align='center'>
                <Hello actions={actions} text={text}/>
                <Change actions={actions}/>
                <br/>
                <Change2 actions={actions} />
                </Section>

                <Section pad='large'
                         justify='center'
                         align='center'
                         colorIndex='grey-4'>
                    <Footer justify='between'>
                        <Title>
                            <BrandHpeStack />
                            Footer
                        </Title>
                        <Box direction='row'
                             align='center'
                             pad={{"between": "medium"}}>
                            <Paragraph margin='none' size="medium">
                                © 2016 Grommet Labs
                            </Paragraph>
                            <Menu direction='row'
                                  size='small'
                                  dropAlign={{"right": "right"}}>
                                <Anchor href='http://www.jianshu.com/p/42e11515c10f' primary={true} label='Support'>

                                </Anchor>
                                <Anchor href='http://www.jianshu.com/p/42e11515c10f' primary={true} label='Contact'>

                                </Anchor>
                                <Anchor href='http://www.jianshu.com/p/42e11515c10f' primary={true} label='About'>

                                </Anchor>
                            </Menu>
                        </Box>
                    </Footer>
                </Section>
                <Section pad='large'
                         justify='center'
                         align='center'
                         colorIndex='grey-4'>
                <Hello />
                </Section>
            </div>


        );
    }
}

function mapStateToProps(state) {
  return { text: state.text }
}

function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators({changeText:changeText,buttonClick:buttonClick},dispatch)
    }
}

App = connect(mapStateToProps,mapDispatchToProps)(App)

render(
    <Provider store={store}>
        <App>
         </App>
    </Provider>,
    document.getElementById('root')
)

