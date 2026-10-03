# Hostel Leave Apply — Vercel Ready

This is a responsive static website recreated from the supplied Chandigarh University Hostel Leave screenshots.

## Included
- Desktop layout matching the supplied full-page screenshot
- Mobile layout matching the supplied phone form screenshot
- Leave type dropdown
- Date and time fields
- Automatic total-days calculation
- Purpose field and confirmation checkbox
- Submit/Clear interactions
- Previous Leave table starts empty (no previous/sample leave records)
- New applications always show the remark: “Check-out is done, but check-in is pending”
- LocalStorage persistence in the browser
- Vercel-ready static deployment

## Deploy on Vercel
1. Create a new GitHub repository.
2. Upload all files in this folder.
3. Open Vercel and choose **Add New Project**.
4. Import the GitHub repository.
5. Framework Preset: **Other**
6. Build Command: leave blank
7. Output Directory: leave blank
8. Click **Deploy**.

No backend is required for this demo because applications are stored in browser LocalStorage. A real university portal would need a secure database/API and authentication.
