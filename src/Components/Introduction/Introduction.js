import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Collapse from '@material-ui/core/Collapse';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import { H1, Hr, Typography, SwitchWrapper, Wrapper } from './style';

const styles = theme => ({
  colorSwitchBase: {
    color: '#026670',
    '& + $colorBar': {
      backgroundColor: '#026670'
    },
    '&$colorChecked': {
      color: '#9FEDD7',
      '& + $colorBar': {
        backgroundColor: '#9FEDD7'
      }
    }
  },
  colorBar: {},
  colorChecked: {}
});

class Introduction extends Component {
  state = {
    isOpen: false
  };

  handleChange = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { classes } = this.props;
    return (
      <Wrapper>
        <Collapse in={this.state.isOpen} collapsedHeight="300px">
          <H1>A Not-So-Short Introduction</H1>
          <Typography>
            As some of you may
            <Tooltip
              id="tooltip-top-end"
              title="You probably do know because I’m becoming one of those annoying
                triathletes who’s life revolves around their upcoming race. Mybad"
              placement="top-end"
            >
              <span> know*</span>
            </Tooltip>
            , Tim and I am doing an Ironman on July 29th.<br />
            I am also running the entire coast of Belgium in August in an event
            I have made up and dubbed the Belgium Border to Border run{' '}
            <em>(BB2B – take note, it’s going to become a thing).</em>
            <br />
            This is all very soon - tapering is due to start any minute now.
          </Typography>
          <Typography>
            I have spent a lot of time
            <Tooltip
              id="tooltip-top-end"
              title="There isn’t much else to do during 40km runs"
              placement="top-end"
            >
              <span> thinking** </span>
            </Tooltip>
            about which charity I’d like to do these events for, and you will be
            able to donate to two of those here, but…I also want to try
            something different!
          </Typography>
          <Typography>
            What I love about Ironman races <em>(and sport in general)</em> is
            how much it brings complete strangers together.<br />
            I owe my finish at the 70.3 World
            <Tooltip
              id="tooltip-top-end"
              title="Yep, casual name dropping"
              placement="top-end"
            >
              <span> Champs*** </span>
            </Tooltip>
            to a random guy in the crowds who told me I was ‘looking strong!’
            despite the fact that I was, most certainly, not looking strong at
            all.{' '}
            <em>
              (I actually owe that finish to my parents, but let’s pretend it
              was just that stranger who saved me for the sake of argument.)
            </em>
            <br />
            People will literally stop a race they’ve trained for every single
            day for the last 12 months if they see someone on the side of the
            road cramping or in need of help.
          </Typography>
          <Typography>
            In London, commuters will walk past a stranger crying so that they
            aren’t 30 seconds late to their desk in the morning.<br />
            We all do it, most of us aren’t even aware that we do it, but all
            around us there are people struggling and we are busier than an
            Ironman 11 hours into a race to take a second to stop and ask if we
            can help.
          </Typography>
          <Typography>
            So here it is, along with raising money for charity, I’m going to
            try something a bit different...
          </Typography>
          <Typography>
            A few months ago, a very close friend of mine gave
            <Tooltip
              id="tooltip-top-end"
              title="I actually stole it. Sorry Chris"
              placement="top-end"
            >
              <span> me**** </span>
            </Tooltip>
            a black wrist band with two words on it: Compassion it.<br />
            It’s aim is to encourage the wearer, i.e. me, to do something
            compassionate that day.<br />
            Once I’ve done it, I can flip the wrist band over to the white side.<br />
            Go to sleep feeling that little bit happier.<br />
            Flip the wristband back to the black side. Repeat.
          </Typography>
          <Typography>
            After a couple of weeks of wearing it, I didn’t even need the
            reminder of the wristband – I had become so much more observant of
            the world around me and was actively looking for how I could help
            strangers.<br />
            This all sounds a little intense, but it was just the slightest
            change in my perception of the world, and it made a world of a
            difference.
          </Typography>
          <Typography>
            Anyway, blah blah – I’m babbling.<br />
            Here’s the plan:
          </Typography>
          <Typography>
            If you’d like to sponsor me – wait, first let me remind you what I
            am actually going to be doing:
          </Typography>
          <Typography bold>
            I’m going to willingly wake up at 4am on a summer’s day to swim
            3.8km, cycle 180km around Whistler <em>(Whistler is very hilly)</em>,
            and then run a marathon.<br />
            Back to back. <br />
            Nonstop.
          </Typography>
          <Typography>
            Then I’m going to sleep lots and do some adventuring and a few weeks
            later I am going to willingly wake up at 4am again, watch the
            sunrise in France{' '}
            <em>(everyone cross their fingers for a nice sunrise)</em>, run
            approximately 75km of beautiful, stunning, Belgian coastline, and
            hopefully make it to Holland for sunset.
          </Typography>
          <Typography>
            Ok, so, with all that in mind if you’d like to sponsor me, here’s
            what I would love for you to do:
          </Typography>
          <Typography>
            <b>OPTION 1: </b>
            Do something nice for someone else today.<br />
            Buy a coffee for one of your colleagues that’s looking a little
            down.<br />
            Actively look up in the tube to see if there is someone you can
            offer your seat to.<br />
            Ask a homeless person sitting outside of Tesco’s if you can buy them
            anything from inside.<br />
            Pick up some trash from the street.<br />
            Help an old lady onto the bus.
          </Typography>
          <Typography>
            GUYS THERE ARE SO MANY NICE THINGS YOU CAN BE DOING.
          </Typography>
          <Typography>
            <b>OPTION 2: </b> You can also donate to charity.<br />
            I’ve chosen two charities here that mean so much to me:
          </Typography>
          <Typography>
            Make-A-Wish UK helps grant children with terminal illnesses a wish.<br />
            Your donation will help 5-year-old Steven become a policeman for the
            day, or help Alice meet her idol.<br />
            It is an incredible charity that brightens up these children’s
            lives.<br />
          </Typography>
          <Typography>
            Age UK focusses on improving the life of the elderly by helping them
            be more independent, organising events for them, and generally
            looking after those who are finding later life difficult.<br />{' '}
            Their work is heartwarming.
          </Typography>
          <Hr />
          <Typography>
            I hate reading the news nowadays because it’s always sad and it
            makes me cry <em>(yeah guys I cry a lot)</em>, and literally the
            greatest things to read are those posts called ‘A reminder that
            humanity still exists’.
          </Typography>
          <Typography bold>
            I want this page to be my very own “Humanity still exists” post.
          </Typography>
          <Typography>
            If you want to sponsor me{' '}
            <em>
              (if you still need convincing please reread previous section of
              this essay)
            </em>, pick one of the options and do it today.<br />
            COME ON. NO CHEATING.<br />
            It’s going to be fun, I promise.
          </Typography>
          <Typography>
            Post it on here to show off that you’re a great human being and to
            motivate me to keep training{' '}
            <em>(also so that I feel like I have lots of friends).</em>
            <br />
            This page will keep a tally of all good deeds & of all donations.
          </Typography>
          <Typography>
            There are 16 days between now and the Ironman{' '}
            <em>(oh wow that’s not a lot)</em> and 43 days until the Belgian
            Ultra, so if you wanted to, you could do 43 good deeds and make me
            feel uber popular by posting them all on here.<br />
            Also imagine how much greater so many strangers' lives will be.
          </Typography>
          <Typography>
            GUYS THIS IS ONLY GOING TO WORK IF PEOPLE ACTUALLY DO THINGS - GO BE
            GREAT.
          </Typography>
          <Typography>
            WAIT DON’T GO YET. LAST BUT VERY DEFINITELY NOT LEAST <br />
            I want to thank David De Wulf for being an absolute superhero and
            creating this website for me in record time.<br />
            You are a legend and I cannot thank you enough!
          </Typography>
          <Typography>xxxxxxx</Typography>
          <Typography bold>Manon</Typography>
          <Typography smaller italic>
            *You probably do know because I’m becoming one of those annoying
            triathletes who’s life revolves around their upcoming race. Mybad.
          </Typography>
          <Typography smaller italic>
            **There isn’t much else to do during 40km runs
          </Typography>
          <Typography smaller italic>
            *** Yep, casual name dropping.
          </Typography>
          <Typography smaller italic>
            ****I actually stole it. Sorry Chris
          </Typography>
        </Collapse>
        <SwitchWrapper isOpen={this.state.isOpen}>
          {this.state.isOpen ? 'Close it' : 'Read more'}
          <Switch
            checked={this.state.isOpen}
            onChange={this.handleChange}
            onClick={this.handleChange}
            classes={{
              switchBase: classes.colorSwitchBase,
              checked: classes.colorChecked,
              bar: classes.colorBar
            }}
          />
        </SwitchWrapper>
      </Wrapper>
    );
  }
}

export default withStyles(styles)(Introduction);
