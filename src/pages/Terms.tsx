import Seo from '@/components/Seo';
import PageHeader from '@/components/ui/PageHeader';
import Prose from '@/components/ui/Prose';
import { site } from '@/lib/site';

const updated = '21 September 2026';

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Use"
        path="/terms"
        description={`Terms governing use of the ${site.legalName} website and booking enquiries.`}
        noAds
      />

      <PageHeader eyebrow="Legal" title="Terms of Use" lead={`Last updated ${updated}.`} />

      <Prose>
        <p>
          These terms govern your use of <a href={site.url}>{site.url}</a>, operated by{' '}
          {site.legalName}. By using the site you accept them.
        </p>

        <h2>Content</h2>
        <p>
          All text, artwork, photography, audio and video on this site belong to{' '}
          {site.legalName} or are used with permission. You may not reproduce, redistribute or
          use them commercially without written consent. Track titles and artist names
          referenced in mixes remain the property of their respective rights holders.
        </p>

        <h2>Booking enquiries</h2>
        <p>
          Submitting an enquiry does not create a booking. A date is only confirmed once terms
          have been agreed in writing and any required deposit has been received. Prices shown
          on this site are indicative and subject to confirmation.
        </p>

        <h2>Accuracy</h2>
        <p>
          We keep event dates and details as current as we can, but line-ups and venues change.
          Confirm with the venue or promoter before travelling to an event.
        </p>

        <h2>Third-party links and advertising</h2>
        <p>
          This site links to external platforms and displays advertising served by Google. We
          do not control that content and are not responsible for it. Following an external
          link is at your own risk.
        </p>

        <h2>Liability</h2>
        <p>
          The site is provided &ldquo;as is&rdquo;. To the extent permitted by South African
          law, we are not liable for any loss arising from your use of it or from reliance on
          information published here.
        </p>

        <h2>Governing law</h2>
        <p>These terms are governed by the laws of the Republic of South Africa.</p>

        <h2>Contact</h2>
        <p>
          Questions can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <p className="!text-xs !text-chrome-700">
          These terms are a starting template prepared for the prototype. Have them reviewed
          before the site goes live.
        </p>
      </Prose>
    </>
  );
}
