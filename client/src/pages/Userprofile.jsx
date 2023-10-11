import '../styles/Userprofile.css'

export default function userProfilePage() {

    return (
        <div id='userProfile'>
            <div id='profileHeader'>
                <h1>User Profile</h1>
                <button id='editBtn'>Edit</button>
            </div>
            <div id='basicInfo'>
                <h2>Basic Information</h2>
                <div>Name</div>
                <div>Sex</div>
                <div>Location</div>
                <div>Profile Picture</div>
            </div>
            <div id='prisonerDetails'>
                <h2>Prisoner Details</h2>
                <div>Prison Address</div>
                <div>Commissary Item Wish List</div>
            </div>
            <div id='communicationSettings'>
                <h2>Communication Settings</h2>
                <div>Allow Email Communication?</div>
            </div>
            <div>
                <h2>Civilian Preferences</h2>
                <div>Sentence Length</div>
                <div>Deal Breaker Crimes</div>
            </div>
        </div>
    )

}