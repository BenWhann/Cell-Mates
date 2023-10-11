import '../styles/Userprofile.css'

export default function userProfilePage() {

    return (
        <div id='userProfile' className='container d-flex flex-column align-items-center'>
            <div id='profileHeader' className='m-3 d-flex flex-column justify-content-center'>
                <h1>User Profile</h1>
                <button id='editBtn'>Edit</button>
            </div>
            <div id='basicInfo' className='m-3 d-flex flex-column align-items-center'>
                <h2>Basic Information</h2>
                <div>Name</div>
                <div>Sex</div>
                <div>Location</div>
                <div>Profile Picture</div>
            </div>
            <div id='prisonerDetails' className='m-3 d-flex flex-column align-items-center'>
                <h2>Prisoner Details</h2>
                <div>Prison Address</div>
                <div>Commissary Item Wish List</div>
            </div>
            <div id='communicationSettings' className='m-3 d-flex flex-column align-items-center'>
                <h2>Communication Settings</h2>
                <div>Allow Email Communication?</div>
            </div>
            <div id='civilianPreferences' className='m-3 d-flex flex-column align-items-center'>
                <h2>Civilian Preferences</h2>
                <div>Sentence Length</div>
                <div>Deal Breaker Crimes</div>
            </div>
        </div>
    )

}