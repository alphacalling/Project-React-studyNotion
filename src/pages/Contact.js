import React from 'react'

const Contact = () => {
  return (
    
    <div className='flex flex-col justify-center bg-teal-500 items-center border border-white text-3xl h-full'>
     <form method="post" action="contact-form-process.php">
        
        <div className=''>
            <label for="Name"
            className='text-white text-2xl text-bold'>Your Name</label>
            <div>
                <input type="text" id="Name" name="Name" required placeholder='Enter your Name'
                className='bg-slate-300'/>
            </div>
        </div>

        <div>
            <label for="Email" className='text-white text-2xl text-bold'>Your Email Address</label>
            <div>
                <input type="email" id="Email" name="Email" required placeholder='Enter your Email Address'
                    className='bg-slate-300'
                />
            </div>
        </div>

        <div>
            <label for="Message" className='text-white text-2xl'>Your Message</label>
            <div>
                <textarea name="Message"  rows="6" maxlength="3000" required placeholder='Enter your Message'
                className='w-full bg-slate-300'></textarea>
            </div>
        </div>

        <div>
            <button type="submit" className='text-white border py-2 mt-4 px-3 rounded-lg bg-blue-600'>Send Message</button>
        </div>

    </form>
    </div>
  )
}

export default Contact