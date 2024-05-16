import { Footer as DsfrFooter } from "@codegouvfr/react-dsfr/Footer";

function Footer(){
    return(
        <DsfrFooter
            accessibility="fully compliant"
            contentDescription="TOTO TATA TITI"
            termsLinkProps={{
                href: '#'
            }}
            websiteMapLinkProps={{
                href: '#'
            }}
        />
    )
}

export default Footer
