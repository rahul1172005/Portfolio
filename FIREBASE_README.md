# Firebase Integration - Contact Form Submissions

## Overview
This portfolio site is integrated with Firebase Firestore to collect and store contact form submissions from users.

## What's Configured

### 1. **Firebase Project**
- **Project ID**: `portfolio-6fbf3`
- **Project Name**: Portfolio
- **Database**: Cloud Firestore (asia-south1)

### 2. **Form Data Structure**
Each submission is stored in the `contact-submissions` collection with the following fields:
- `fullName` (string) - User's full name
- `email` (string) - User's email address
- `projectType` (string) - Type of project (Website/App/Design/etc.)
- `budgetRange` (string) - Budget range in ₹
- `projectDetails` (string) - Detailed project description
- `submittedAt` (timestamp) - Auto-generated submission timestamp
- `status` (string) - Submission status: 'new', 'contacted', or 'closed'

### 3. **Security Rules**
- ✅ **Public Write**: Anyone can submit the contact form
- 🔒 **Private Read**: Only authenticated users can view submissions
- 🔒 **Validation**: Form data is validated before being accepted
- 🔒 **Email Validation**: Email format is validated server-side

## How to View Submissions

### Option 1: Firebase Console (Recommended)
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select the **Portfolio** project
3. Navigate to **Firestore Database** in the left sidebar
4. Click on the `contact-submissions` collection
5. View all submissions with timestamps and details

### Option 2: Using Firebase CLI
```bash
# List all submissions
firebase firestore:get contact-submissions --project portfolio-6fbf3
```

## Managing Submissions

### Update Submission Status
In the Firebase Console:
1. Click on a submission document
2. Edit the `status` field
3. Change from 'new' to 'contacted' or 'closed'

### Export Submissions
In the Firebase Console:
1. Go to Firestore Database
2. Select the `contact-submissions` collection
3. Click the three dots menu
4. Choose "Export collection"

## Form Features

### Client-Side Validation
- ✅ Required fields validation
- ✅ Email format validation
- ✅ Real-time error messages
- ✅ Loading states during submission

### User Feedback
- ✅ Success message on successful submission
- ✅ Error messages for failed submissions
- ✅ Form reset after successful submission
- ✅ Auto-dismiss success message after 5 seconds

## Files Modified/Created

### New Files
- `lib/firebase.ts` - Firebase configuration and initialization
- `types/contact.ts` - TypeScript interface for form data
- `firebase.json` - Firebase project configuration
- `firestore.rules` - Firestore security rules
- `firestore.indexes.json` - Firestore indexes configuration

### Modified Files
- `components/ContactSection.tsx` - Added form state management and Firebase integration

## Environment Variables
No environment variables needed! Firebase config is public and safe to commit (API keys are restricted by domain in Firebase Console).

## Testing the Form

1. Navigate to your portfolio site: http://localhost:3000
2. Scroll to the contact section
3. Fill out the form with test data
4. Click "Send Request"
5. Check Firebase Console for the submission

## Troubleshooting

### Form submission fails
- Check browser console for errors
- Verify Firebase rules are deployed: `firebase deploy --only firestore:rules`
- Ensure you're connected to the internet

### Can't see submissions in Firebase Console
- Make sure you're logged in with the correct Google account (rahul1172005@gmail.com)
- Verify you're viewing the correct project (portfolio-6fbf3)

## Next Steps (Optional Enhancements)

1. **Email Notifications**: Set up Firebase Cloud Functions to send you an email when a form is submitted
2. **Admin Dashboard**: Create a protected admin page to view submissions directly on your site
3. **Analytics**: Track form submission rates and conversion metrics
4. **Spam Protection**: Add reCAPTCHA to prevent spam submissions
5. **Auto-Response**: Send automated confirmation emails to users

## Support
For issues or questions, check the Firebase documentation: https://firebase.google.com/docs/firestore
