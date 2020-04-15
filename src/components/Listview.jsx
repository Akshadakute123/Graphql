import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

mobiscroll.settings = {
    theme: 'ios',
    themeVariant: 'light'
};

class MultilineItem extends React.Component {
    render() {
        return <li> 
            <h3>{this.props.item.title}</h3>
            <p>{this.props.item.text}</p>
        </li>;
    }
}

class CustomItem extends React.Component {
    render() {
        return <li> 
            {this.props.item.title}
            <span className="md-star-icon mbsc-ic mbsc-ic-star3">
                {this.props.item.rate}
            </span>
        </li>;
    }
}

class CardsItem extends React.Component {
    render() {
        return <li> 
            <mobiscroll.Card> 
                <mobiscroll.CardContent>
                    <mobiscroll.Avatar src={this.props.item.img} />
                    <mobiscroll.CardTitle>
                        {this.props.item.title}
                    </mobiscroll.CardTitle>
                    <mobiscroll.CardSubtitle>
                        {this.props.item.text}
                    </mobiscroll.CardSubtitle>
                </mobiscroll.CardContent>
            </mobiscroll.Card>
        </li>;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            multiline: [{
                id: 1,
                title: 'Electric Smartscooter',
                text: 'Gogoro Smartscooter is world’s first connected two-wheeled electric vehicle.'
            }, {
                id: 2,
                title: 'The Solar Bike',
                text: 'An electric bike that incorporates solar panels and producing enough energy to use it 30 km a day'
            }, {
                id: 3,
                title: 'Smallest Quadricopter',
                text: 'The Dutch gadget-manufacturer TRNDlabs reveals the smallest quadricopter of the world'
            }, {
                id: 4,
                title: 'Glow Headphones',
                text: 'Discover the world’s first laser headphones that pulse to the music'
            }],
            custom: [{
                id: 1,
                title: 'The Intouchables (2011)',
                rate: 8.5
            }, {
                id: 2,
                title: 'The Shawshank Redemption(1994)',
                rate: 9.2
            }, {
                id: 3,
                title: 'Fight Club(1999)',
                rate: 8.8
            }, {
                id: 4,
                title: 'Inception(2010)',
                rate: 8.7
            }],
            cards: [{
                id: 1,
                title: 'Netflix',
                text: 'Sherlock Series 3 is now avalable on Netflix',
                img: 'https://img.mobiscroll.com/demos/netflix.png'
            }, {
                id: 2,
                title: 'Angry birds',
                text: 'Dont forget your daily Arena entry.',
                img: 'https://img.mobiscroll.com/demos/angrybirds.png'
            }, {
                id: 3,
                title: 'Candycam',
                text: 'A new update is available!',
                img: 'https://img.mobiscroll.com/demos/candycam.png'
            }]
        };
    }
    
    render() {
        return (
            <mobiscroll.Form>
                <mobiscroll.FormGroup>
                    <mobiscroll.FormGroupTitle>Multiline text</mobiscroll.FormGroupTitle>
                    <mobiscroll.Listview
                        itemType={MultilineItem}
                        enhance={true}
                        swipe={false}
                        data={this.state.multiline}
                    />
                </mobiscroll.FormGroup>
                <mobiscroll.FormGroup>
                    <mobiscroll.FormGroupTitle>Custom CSS</mobiscroll.FormGroupTitle>
                    <mobiscroll.Listview
                         className="md-custom-listview"
                        itemType={CustomItem}
                        enhance={true}
                        swipe={false}
                        data={this.state.custom}
                    />
                </mobiscroll.FormGroup>
                <mobiscroll.FormGroup>
                    <mobiscroll.FormGroupTitle>Cards</mobiscroll.FormGroupTitle>
                    <mobiscroll.Listview
                         className="mbsc-card-list"
                        itemType={CardsItem} 
                        swipe={false}
                        data={this.state.cards}
                    />
                </mobiscroll.FormGroup>
        </mobiscroll.Form>
        );
    }
}
