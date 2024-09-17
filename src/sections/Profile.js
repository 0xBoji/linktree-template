import { IonIcon } from '@ionic/react';
import { checkmarkCircleSharp } from 'ionicons/icons';

const profile = {
    fullname: 'Mibu Kyoshiro',
    bio: 'Web3 Enthusiast | SUI maxi | Domain lover',
    picture: 'https://cyan-eldest-earwig-943.mypinata.cloud/ipfs/QmTQmoiAYBW4z5rSGMNWAbfoXtqhUsbKMxarm4KAuKqJdQ',
    socialMedia: [
        { name: 'Twitter', url: 'https://x.com/MinhTranQuang10' },
        { name: 'Telegram', url: 'https://t.me/Mibu999' },
        { name: 'Discord (Suisian)', url: 'https://discord.gg/sxAvgYmZ' },
        { name: 'Website', url: 'https://999.bnb.me/' },
    ]
}

const colors = [
    "#F4F1DE",
    "#6DC7F7",
    "#3D405B",
    "#81B29A",
];

function Button(props) {
    const style = {
        backgroundColor: colors[props.index]
    }

    return (
        <a href={props.url} className="button" style={style}>
            {props.name}
        </a>
    )
}

function Profile() {
    return (
        <section className="profile">
            <div className='m-auto w-full sm:w-[280px]'>
                <div className="mb-5">
                    <div className="profile-picture"><img src={profile.picture} alt={profile.name}></img></div>
                    <h1 className="profile-fullname">
                        {profile.fullname}
                        <IonIcon className='profile-fullname-check_mark' src={checkmarkCircleSharp} />
                    </h1>
                </div>

                <div className="profile-bio">{profile.bio}</div>

                <div className="social_media flex flex-col">
                    {profile.socialMedia.map((el, i) => <Button name={el.name} url={el.url} index={i} />)}
                </div>
            </div>
        </section>
    );
}

export default Profile;
