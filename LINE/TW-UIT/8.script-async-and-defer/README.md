# Script async and defer

for `<script>`, `<script async>` and `<script defer>`

1. Describe the difference between the above 3 tags

    `<script>`

    The scripts download synchronously and execute when HTML is parsed

    `<script async>`

    The scripts download asynchronous and execute once the scripts download complete

    `<script defer>`

    The scripts download and execute after HTML is parsed, but before the DOMContentLoaded event

2. Given examples of script in the real world are suitable for `async` or `defer` (ex: advertising script are suitable for async because xxxx ...)

    `async` is suitable for small module and not depends on page DOM, like background logos, advertisements etc., to display the effects as soon as possible, to avoid user experiences.

    `defer` is used for strongly depending on DOM or required by other scripts, like input, code highlighter, DOM event handlers.
