import { Footer as DsfrFooter } from '@codegouvfr/react-dsfr/Footer';

function Footer() {
    return (
        <DsfrFooter
            accessibility="partially compliant"
            termsLinkProps={{
                href: '#',
            }}
            websiteMapLinkProps={{
                to: '/plan-du-site',
            }}
        />
    );
}

export default Footer;
