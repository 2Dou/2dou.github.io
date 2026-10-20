# Running SVG deployment contract

The private `2Dou/garmin-running-page` repository triggers this workflow with the `update-svg` repository-dispatch event. Its `client_payload.svg_gzip_base64` field contains the UTF-8 SVG compressed with gzip and encoded as Base64.

The dispatch payload is capped at 63,000 Base64 characters so the complete JSON body remains below GitHub's 64 KB repository-dispatch limit. The workflow decodes the payload, limits the expanded SVG to 2 MiB, verifies that it is well-formed XML with an SVG root element, and then updates `running.svg`.

The site workflow receives the artifact in the event payload, so it does not fetch the private source repository or need a second repository-read token.
