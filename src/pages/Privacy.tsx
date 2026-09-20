import Seo from '@/components/Seo';
import PageHeader from '@/components/ui/PageHeader';
import Prose from '@/components/ui/Prose';
import { site } from '@/lib/site';

const updated = '21 September 2026';

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        path="/privacy"
        description={`How ${site.legalName} collects, uses and protects your personal information.`}
        noAds
      />

      <PageHeader eyebrow="Legal" title="Privacy Policy" lead={`Last updated ${updated}.`} />

      <Prose>
        <p>
          This policy explains how {site.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
          collects, uses and protects personal information when you use{' '}
          <a href={site.url}>{site.url}</a>. We process personal information in line with
          South Africa&rsquo;s Protection of Personal Information Act (POPIA).
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <strong>Information you give us.</strong> When you submit a booking enquiry we
            collect your name, email address, phone number and the details you provide about
            your event.
          </li>
          <li>
            <strong>Information collected automatically.</strong> Standard technical data such
            as your browser type, device, approximate location and the pages you visit,
            gathered through cookies and similar technologies.
          </li>
        </ul>

        <h2>How we use it</h2>
        <ul>
          <li>To respond to booking enquiries and provide quotes.</li>
          <li>To operate, secure and improve the website.</li>
          <li>To display advertising, where you have consented to advertising cookies.</li>
        </ul>
        <p>
          We do not sell your personal information, and we do not share enquiry details with
          third parties other than the service providers described below.
        </p>

        <h2>Cookies and advertising</h2>
        <p>
          We use a small number of cookies to keep the site working and to remember your
          cookie choice. With your consent we also allow Google, as a third-party vendor, to
          serve advertising on this site.
        </p>
        <ul>
          <li>Google uses cookies to serve ads based on your prior visits to this and other websites.</li>
          <li>
            You can opt out of personalised advertising at any time through{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            , or opt out of third-party vendor cookies at{' '}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
            >
              aboutads.info
            </a>
            .
          </li>
          <li>
            Google&rsquo;s own practices are described in its{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy and terms policy
            </a>
            .
          </li>
        </ul>
        <p>
          You can decline advertising cookies using the banner shown on your first visit, or
          clear them at any time through your browser settings. Declining does not affect your
          ability to use the site or submit an enquiry.
        </p>

        <h2>Service providers</h2>
        <p>
          The site is hosted by a third-party hosting provider, and advertising is delivered by
          Google AdSense. Booking enquiries are delivered by email. Each of these providers
          processes data on our behalf under their own terms.
        </p>

        <h2>Retention</h2>
        <p>
          Booking enquiries are kept for as long as needed to respond and to maintain a record
          of the engagement, after which they are deleted. Technical and advertising data is
          retained by the relevant provider according to its own policy.
        </p>

        <h2>Your rights</h2>
        <p>Under POPIA you may ask us to:</p>
        <ul>
          <li>confirm what personal information we hold about you;</li>
          <li>correct or delete information that is inaccurate or no longer needed;</li>
          <li>object to processing in certain circumstances.</li>
        </ul>
        <p>
          To exercise any of these rights, email <a href={`mailto:${site.email}`}>{site.email}</a>.
          You also have the right to lodge a complaint with the Information Regulator of South
          Africa.
        </p>

        <h2>Children</h2>
        <p>
          This site is not directed at children under 18 and we do not knowingly collect their
          personal information.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy from time to time. The date at the top reflects the most
          recent revision.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <p className="!text-xs !text-chrome-700">
          This policy is a starting template prepared for the prototype. Have it reviewed
          against your final data-handling practices before the site goes live.
        </p>
      </Prose>
    </>
  );
}
