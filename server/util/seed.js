const {Jersey} = require('./models')

let jerseys = [
    {
        name: 'Like a GOAT',
        price: 84.99,
        description: 'Look like Mike, Feel like Mike. Feel like Mike, play like Mike. Play like Mike, fly like Mike. Order today and take flight!',
        photo: 'https://img.bstn.com/eyJidWNrZXQiOiJic3RuLWltYWdlLXNlcnZlciIsImtleSI6ImNhdGFsb2cvcHJvZHVjdC9hank0Y3AxOTAxNi1jYnVzY2FyOTdtam8vYWp5NGNwMTkwMTYtY2J1c2Nhcjk3bWpvLTAxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb250YWluIiwid2lkdGgiOjU4MCwiaGVpZ2h0Ijo3MjUsImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9fX19'
    },
    {
        name: 'Larry Magic',
        price: 96.99,
        description: 'Want to drop 47 points on your friends using only your left hand? Then this is the jersey for you! Buy today and feel the magic!',
        photo: 'https://m.media-amazon.com/images/I/71HQQwmirqL._AC_UL320_.jpg'
    },
    {
        name: 'Shaq-Attack',
        price: 84.99,
        description: 'Shatter backboards!.. not your mothers love for you by making your debut on Shaqtin a Fool. If you are ready to go hard in the paint and tear down some rims, this is the jersey for you!',
        photo: 'https://fanatics.frgimages.com/los-angeles-lakers/youth-mitchell-and-ness-shaquille-oneal-gold-los-angeles-lakers-swingman-throwback-jersey_pi3395000_altimages_ff_3395053-e6709903cd667971ca57alt1_full.jpg?_hv=2&w=900'
    },
    {
        name: 'The Black Mamba',
        price: 142.99,
        description: 'If you are trying to go out in flames, this is the jersey for you! Too soon you say?? Well Kobe says toughen up and let me see that Mamba mentality! Buy now and make every moment lengendary, because you never know if it will be your last.',
        photo: 'https://images.footballfanatics.com/los-angeles-lakers/mens-mitchell-and-ness-kobe-bryant-purple-los-angeles-lakers-1996-97-hardwood-classics-authentic-player-jersey_pi3633000_altimages_ff_3633452-f5dbeb6afbe4e24c4171alt1_full.jpg?_hv=2&w=900'
    },
    {
        name: 'The Slim Reaper',
        price: 14.99,
        description: 'Are you tired of failing? Do you consistently blow large leads in city league? Should you be banned from twitter for life for your own good? If you answered yes to any of those questions then this is the jersey for you! Because remember, if you cant beat em, join em! Buy now to find instant success the easy way! ',
        photo: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTqRcIUpBVUiwwp_PikQK8buK76KQ5L2wdPh4c_v3Pu7odCAd9Mgt0W53zWKuberuGMEH9BFx7JegkWThQkVF20t3ZusHxXf_smtQFd30AMuHYhFSZorTiUkA'
    },
    {
        name: 'The Big Ticket',
        price: 109.99,
        description: 'Do your friends consider you a tough guy? Maybe a loose cannon? Do you cuss like a sailor and sometimes bang your head on the basketball standard like a maniac but still get buckets? Does the area fill up to see you play night in and night out? Then you too might be a big ticket. Buy now and go **** some dudes up (just a saying.. we are not liable if you actually **** some dudes up) at city league!',
        photo: 'https://dks.scene7.com/is/image/GolfGalaxy/19MNNMNBTWLVSBLKGMIN?qlt=70&wid=1100&fmt=webp'
    },
    {
        name: 'The Cookie Jar',
        price: 74.99,
        description: 'Are you arguably the best point guard in your school? Do you get more cookies than a girl scout? Are you getting cancelled for your non-mainstream political views yet still one of the greatest passers of all time? Then this is the jersey for you! Buy now and receive a free covid vaccination included with the price!',
        photo: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ_O0NNI0cVY6M4cpGX4CUCsiajm8L460fjS0aFYhb3oTn6o42LQyEMizqvDSn1KTliKNa1EnTxUAA&usqp=CAc'
    },
    {
        name: 'The Chosen',
        price: 110.99,
        description: 'Do you remember the days when you were full of life, hope, athleticism, potential, and were flying on the wings of destiny? Have you now become a bitter crybaby and come to realize that everyone who once loved, nay, worshipped you can hardly even watch you play the great game these days? Then this is the jersey for you! Buy now and may your tears ever flow, just not on our television screen where we have to deal with that crap!',
        photo: 'https://cdn.shopify.com/s/files/1/0993/8094/products/mitchell-ness-adult-jersey-lebron-james-cleveland-cavaliers-mitchell-ness-navy-blue-throwback-swingman-jersey-28517363777615_600x600.jpg?v=1628021249'
    },
    {
        name: 'The Greek Freak',
        price: 134.99,
        description: 'Is it someway, somehow impossibly more difficult to guard you in the lane than to pronounce your name? Do you often get the hankering for 50 Chik-fil-a nuggets after winning the big game?? Then this is the jersey for you! Buy now and forever and always, fear the deer!',
        photo: 'https://fanatics.frgimages.com/milwaukee-bucks/mens-fanatics-branded-giannis-antetokounmpo-hunter-green-milwaukee-bucks-fast-break-replica-player-jersey-icon-edition_pi3719000_altimages_ff_3719152-a2d0b52292a888c82cd0alt1_full.jpg?_hv=2&w=900'
    },
    {
        name: 'Ja Dropper',
        price: 124.99,
        description: 'Does gravity not apply to you? Do you bring the sauce to the burger and the court? When you see a sky scraper do you go over rather than around? Then this may be the jersey for you! Buy today and maybe your claim on the GOATs nickname will still tomorrow!',
        photo: 'https://bati.s3.us-west-1.amazonaws.com/wp-content/uploads/2022/12/01134048/16322156898c42bd8ea7.jpeg'
    }
]

const seed = async () => {
    
    await Jersey.bulkCreate(jerseys)
    console.log('----SEED COMPLETE----')
}

module.exports = seed