import { auth } from "../../auth";
import Header from "./components/Header";
import LinkHref from "./components/LinkHref";
import Image from "next/image";

export default async function Home() {

  const session = await auth()

  return (
    <div>
      <Header session={session} />
      <div className="pl-6 pt-8 md:pl-64 md:pt-16 min-h-screen bg-neutral-800 pb-48">
        <h1 className="text-5xl font-medium mb-8">Nextra</h1>
        <p>Yeah, you made it 💪🏻 ! Welcome to Nextra !</p>
        <p>Nextra is a <LinkHref href="https://en.wikipedia.org/wiki/Boilerplate_code" text="boilerplate" target="_blank" />
          &nbsp;used to <strong>easily</strong> create applications with&nbsp;
          <LinkHref href="https://nextjs.org/" text="Next.js" target="_blank"/>
          &nbsp;and authentication with&nbsp;
          <LinkHref href="https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id" text="Microsoft Entra ID" target="_blank" />
        .</p>
        <div className="mt-12">
          <h2 className="text-3xl font-medium mb-2">Features :</h2>
          <ul className="list-disc list-inside [&_ul]:list-[revert] [&_li]:pl-5">
            <li><LinkHref href="https://nextjs.org/blog/next-14-2/" text="Next.js 14.2" target="_blank"/></li>
            <li><LinkHref href="https://tailwindcss.com/" text="Tailwind CSS" target="_blank"/></li>
            <li><LinkHref href="https://authjs.dev/" text="Auth.js" target="_blank"/> (with Entra ID provider)</li>
            <li><LinkHref href="https://headlessui.com/" text="HeadlessUI" target="_blank"/></li>
            <li><LinkHref href="https://heroicons.com/" text="HeroIcons" target="_blank"/></li>
            <li>Auth protected route (<LinkHref href="/protected" text="/protected" target="_blank"/>)</li>
            <li>
              Basic components :
              <ul className="list-disc list-inside">
                <li>Sign in button</li>
                <li>Sign out button</li>
                <li>Responsive header</li>
                <li>Cool hover link 😉</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mt-14 gap-5 pr-6">
          <h2 className="text-3xl font-medium">How to create a Microsoft Entra ID application ?</h2>
          <p>Here is a quick guide on how to create a Microsoft Entra ID app so you can replace all the environment variables that you need.</p>
          <ol className="list-decimal list-inside [&_li]:pl-5 flex flex-col gap-2">
            <li>Go to <LinkHref href="https://microsoft.entra.com/" text="https://microsoft.entra.com/" target="_blank" /> and login.</li>
            <li>Then, on the left, under the &quot;Identity&quot; and &quot;Applications&quot; tab, click on &quot;App registrations&quot;.
              <Image className="pl-6 mt-3 mb-5" src="/microsoft_entra_howto/1.png" width="230" height="230" alt="Microsoft Entra admin center screenshot"/>
            </li>
            <li>At the top, under the &quot;App registrations&quot; title, click on the &quot;New registration&quot; button.
              <Image className="pl-6 mt-3 mb-5" src="/microsoft_entra_howto/2.png" width="660" height="230" alt="Microsoft Entra app registrations screenshot"/>
            </li>
            <li>
              Fill in the name of your application, and pay a <strong>close attention</strong> to the &quot;Who can use this application or access this API?&quot;
              <ul className="list-disc list-inside mb-4">
                <li>This will allow you to choose who can access tou your app.</li>
              </ul>
            </li>
            <li>Under the &quot;Redirect URI (optional)&quot; section, in the dropdown select &quot;Web&quot; and the URL will depends :
              <ul className="list-disc list-inside flex flex-col gap-1">
                <li>If your application is in development (local), put <code className="text-sm bg-neutral-900 p-1 rounded break-words">http://localhost:3000/api/auth/callback/microsoft-entra-id</code></li>
                <li>If your application is in production, put <code className="text-sm bg-neutral-900 p-1 rounded break-words">https://yourapp.com/api/auth/callback/microsoft-entra-id</code></li>
              </ul>
            </li>
            <li>Click on &quot;Register&quot;.</li>
            <li>After that, you need to create your client secret. For that, click on the blue link next to &quot;Client credentials&quot; under the &quot;Overview&quot; tab.
              <Image className="pl-6 mt-3 mb-5" src="/microsoft_entra_howto/3.png" width="800" height ="800" alt="Microsoft Entra application Overview tab" />
            </li>
            <li>Now, click on the &quot;New client secret&quot; button.</li>
            <li>Enter a name for the secret and choose when it expires.</li>
            <li>Be sure to save/copy your secret&apos;s value. You will not be able to see it any other time.</li>
            <li>In your <code className="text-sm bg-neutral-900 p-1 rounded">.env.local</code> file, you can assign your secret&apos;s value to the variable <code className="text-sm bg-neutral-900 p-1 rounded break-words">AUTH_MICROSOFT_ENTRA_ID_SECRET</code>.</li>
            <li>Go back to the &quot;Overview&quot; tab.</li>
            <li>Copy your &quot;Application (client) ID&quot; and your &quot;Directory (tenant) ID&quot;
              <Image className="pl-6 mt-3 mb-5" src="/microsoft_entra_howto/4.png" width="900" height ="800" alt="Microsoft Entra application Overview tab" />
            </li>
            <li>Assign the &quot;Application (client) ID&quot; value to the <code className="text-sm bg-neutral-900 p-1 rounded break-words">AUTH_MICROSOFT_ENTRA_ID_ID</code> variable.</li>
            <li>Assign the &quot;Directory (tenant) ID&quot; value to the <code className="text-sm bg-neutral-900 p-1 rounded break-words">AUTH_MICROSOFT_ENTRA_ID_TENANT_ID</code> variable.</li>
            <li className="mb-4">That&apos; it ! You can now try to login with the&nbsp;
              <span className="relative group">
                <code className="text-sm bg-neutral-900 text-sky-400 p-1 rounded break-words">
                  <LinkHref href="https://github.com/Azecko/nextra/blob/main/src/app/components/auth/SignInButton.tsx" text="SignInButton" target="_blank"/>
                </code>
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-700 text-white text-xs rounded-md p-2 w-max">
                  SignInButton on GitHub
                </span>
              </span> component.
            </li>
          </ol>
        </div>
        <i>Thanks to the&nbsp;
          <LinkHref href="https://authjs.dev/getting-started/providers/microsoft-entra-id"
          text="Auth.js documentation"
          target="_blank"/> !
        </i>
      </div>
    </div>
  );
}
