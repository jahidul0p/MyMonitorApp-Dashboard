import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { app_name, package_name, webview_url, api_endpoint } = body;

  // ⚠️ সতর্কতা: এখানে আপনার GitHub Personal Access Token টি বসাতে হবে।
  // (এটি শুধু টেস্ট করার জন্য। বাস্তবে এভাবে কোডে টোকেন রাখা নিরাপদ না!)
  const GITHUB_TOKEN = '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'; 
  
  const GITHUB_OWNER = 'jahidul0p'; 
  const GITHUB_REPO = 'MyMonitorApp'; 

  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/actions/workflows/build.yml/dispatches`;
  
  await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github.v3+json',
    },
    body: JSON.stringify({
      ref: 'main',
      inputs: { app_name, package_name, webview_url, api_endpoint }
    })
  });

  return NextResponse.json({ success: true, message: "🚀 APK তৈরি শুরু হয়েছে! GitHub Actions চেক করুন।" });
}
