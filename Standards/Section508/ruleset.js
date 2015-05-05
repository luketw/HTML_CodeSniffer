/**
 * +--------------------------------------------------------------------+
 * | This HTML_CodeSniffer file is Copyright (c)                        |
 * | Squiz Australia Pty Ltd ABN 53 131 581 247                         |
 * +--------------------------------------------------------------------+
 * | IMPORTANT: Your use of this Software is subject to the terms of    |
 * | the Licence provided in the file licence.txt. If you cannot find   |
 * | this file please contact Squiz (www.squiz.com.au) so we may        |
 * | provide you a copy.                                                |
 * +--------------------------------------------------------------------+
 *
 */

HTMLCS.addStandard('Section508', {
    name: HTMLCS.loc._('U.S. Section 508'),
    description: HTMLCS.loc._(
        'U.S. Rehabilitation Act Section 508: <a href="%1">"Web-based intranet and internet information and applications"</a>.',
        'http://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-section-508-standards/section-508-standards#22'
    ),
    sniffs: [
        'A',
        'B',
        'C',
        'D',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P'
    ],
    getMsgInfo: function(code) {
        var msgCodeParts  = code.split('.', 3);
        var paragraph     = msgCodeParts[1].toLowerCase();

        var retval = [
            ['Section', '1194.22 (' + paragraph + ')']
        ];

        return retval;
    }
});
