# RESOURCES SECTION IMPLEMENTATION PROMPT FOR FRASER VALLEY VOLLEYBALL

## TASK: Implement Complete Resources Section with Membership, Support, and Policies

**CONTEXT & OBJECTIVE:**
Transform the current dummy Resources dropdown menu into a fully functional section with real pages containing membership programs, athlete support resources, and essential policies for Volleyball Fraser Valley. The Resources section needs to provide comprehensive information about membership benefits, financial assistance, and legal/policy documentation while maintaining the existing design system and user experience patterns.

**PRELIMINARY RESEARCH PHASE (MANDATORY):**

### Sub-Agent 1: Architecture Analyzer
- Examine `/app/components/shared/navbar.tsx` lines 68-74 for current dropdown structure
- Study existing page patterns in `/app/programs/page.tsx` and `/app/blog/page.tsx`
- Analyze the motion animations and background patterns used across pages
- Document the consistent layout structure with gradient backgrounds
- Identify reusable components in `/components/ui/` directory

### Sub-Agent 2: Component Pattern Auditor
- Review button styling in `/components/ui/button.tsx` for CTA implementation
- Study card layouts and hover animations from existing pages
- Examine form patterns from `/app/contact/get-in-touch/page.tsx`
- Check accordion component usage for expandable content sections
- Analyze responsive breakpoints (mobile-first with lg: prefix)

### Sub-Agent 3: Content Integration Specialist
- Map all content sections to appropriate pages (3-4 pages max)
- Identify redundant information between membership tiers
- Plan component structure for membership cards and pricing
- Design form integration points for applications and waivers
- Structure policy content for optimal readability

## IMPLEMENTATION REQUIREMENTS:

### Must Do:
1. **Update Navbar Dropdown** (`/app/components/shared/navbar.tsx` lines 68-74):
   - Replace dummy items with:
     - Membership Program → `/resources/membership`
     - Athlete Support → `/resources/support`
     - Policies & Forms → `/resources/policies`

2. **Create Main Resources Page** (`/app/resources/page.tsx`):
   - Overview page with cards linking to each subsection
   - Use existing card hover animations and gradient styles
   - Include brief descriptions of each resource category

3. **Implement Membership Program Page** (`/app/resources/membership/page.tsx`):
   - Hero section with "Where Champions Are Made Since 1999" tagline
   - Membership tiers comparison table/cards
   - Benefits section with icon grids
   - CTA buttons for registration

4. **Create Athlete Support Page** (`/app/resources/support/page.tsx`):
   - Subsidy program information and eligibility
   - Application process with numbered steps
   - Download link for subsidy form
   - Waiver form section with acceptance checkbox UI

5. **Build Policies Page** (`/app/resources/policies/page.tsx`):
   - Tabbed or accordion layout for different policies
   - Refund Policy with program-specific sections
   - Terms of Service
   - Privacy Policy
   - Clean, readable typography for legal content

### Must NOT Do:
- Don't create more than 3-4 pages in the Resources dropdown
- Don't break existing responsive design patterns
- Don't use different animation styles than existing pages
- Don't hardcode contact info - use constants
- Don't duplicate redundant membership content

## TECHNICAL SPECIFICATIONS:

### Contact Information Constants:
```typescript
const CONTACT = {
  phone: "403-510-1784",
  email: "hello@volleyballfraservalley.ca",
  subsidyFormUrl: "https://cdn1.sportngin.com/attachments/document/9946-3338366/Subsidy_Form_-_Volleyball_Fraser_Valley.pdf"
}
```

### Page Structure Template:
```typescript
// Use consistent layout from existing pages
<div className="relative">
  {/* Gradient background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-background dark:to-gray-950" />
  </div>
  
  {/* Animated grid pattern */}
  <motion.div
    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
    className="absolute inset-0 opacity-[0.015]"
    style={{
      backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
      backgroundSize: "40px 40px",
    }}
  />
  
  {/* Content sections */}
  <section className="relative pt-10 sm:pt-12 pb-6">
    {/* Page specific content */}
  </section>
</div>
```

### Component Requirements:
- Use existing Button component with gradient styles
- Implement cards with hover animations (scale and shadow)
- Use Badge component for labels and categories
- Implement responsive grid layouts (grid-cols-1 lg:grid-cols-2/3)

## CONTENT ORGANIZATION:

### Page 1: MEMBERSHIP PROGRAM (`/resources/membership`)

#### Hero Section:
**Title:** Volleyball Fraser Valley Membership Program  
**Subtitle:** Where Champions Are Made Since 1999  
**Description:** Join thousands of young athletes developing their skills through our comprehensive programs. We've been the catalyst for countless British Columbians advancing to college and university scholarships.

#### Membership Tiers (Display as comparison cards):

**SINGLE YOUTH Membership - $71.95/month**
- Weekly Training: Choose one activity from Camps or Leagues
- Guaranteed Spots: Priority Registration for sought-after camps
- Exclusive Discounts: Save on gear, group training, and private lessons
- Buddy Passes: Three (3) passes every 12 months
- Start-up Fee: $30 (one-time)

**DOUBLE YOUTH Membership - $121.95/month**
- Weekly Training: Choose two activities from Camps or Leagues
- Guaranteed Spots: Priority Registration for sought-after camps
- Exclusive Discounts: Save on gear, group training, and private lessons
- Buddy Passes: Three (3) passes every 12 months
- Start-up Fee: $30 (one-time)

**ADULT Membership - COMING SOON**
- Details coming this fall
- Designed for those who want to stay in the game

#### Seasonal Programs Include:
- Summer Weeknight/Half-day Skills Camp
- Fall Skills Camp & Saturday League
- Winter Skills Camp & Saturday League
- Spring Skills Camp & Saturday League

#### Why Join Section:
**10 Reasons Parents Should Subscribe:**
1. Affordable monthly payments instead of large seasonal fees
2. Year-round volleyball development
3. Priority registration beats the rush
4. Significant savings for multi-sport families
5. Professional coaching from VEA-certified instructors
6. Flexible scheduling options
7. Community of dedicated athletes
8. Pathway to competitive volleyball
9. Buddy passes to share the experience
10. Supporting accessible sport for all

#### Background:
With thousands of young athletes in Fvolleyballfraservalley.ca programs annually, we recognize the challenge of rising sports costs. Our Monthly Membership Program provides families an affordable way to budget for year-round volleyball participation, offering significant savings compared to seasonal registrations.

#### CTA Section:
**Get Started Today!**  
Ready to transform your volleyball experience? Join Fraser Valley's Membership Program and become part of our legacy of excellence. Limited spots available - they fill up fast!

[Register Now Button] [Learn More Button]

---

### Page 2: ATHLETE SUPPORT (`/resources/support`)

#### Section 1: Athlete Subsidy Program

**Title:** 2025 Volleyball Fraser Valley Athlete Subsidy Program  
**Description:** Volleyball Fraser Valley is committed to supporting young athletes in our community. Get funding for Vision Volleyball Club, League and Camps.

**Key Information:**
- Assistance up to $500 per calendar year per athlete
- Covers program registration fees only
- Athletes must be 18 or under
- Not retroactive - register before applying
- Applications reviewed monthly (submit by 15th)
- Minimum 3 weeks processing time

**Note:** KidSport and Jumpstart do not fund our programs as we are not associated with Volleyball BC.

**Application Process:**
1. **Download Application Form**  
   [Download Subsidy Form Button - links to PDF]
   
2. **Gather Required Documents**  
   - Proof of total household income (CRA Notice of Assessment)
   - Proof of social assistance or foster parent status
   
3. **Submit Your Application**  
   Email to: hello@volleyballfraservalley.ca

**Contact:** For questions about the application process, email hello@volleyballfraservalley.ca

#### Section 2: Waiver & Consent Forms

**Title:** Liability Waiver & Media Consent

**Waiver Summary Box:**
RELEASE OF LIABILITY, WAIVER OF CLAIMS, ASSUMPTION OF RISKS AND INDEMNITY AGREEMENT

**Key Points:**
- Acknowledges inherent risks in sports participation
- Releases Volleyball Fraser Valley from liability
- Includes photo/video consent for promotional use
- Required for all program participants
- NO unauthorized filming of athletes permitted at training sessions

**Digital Acceptance:**
[Checkbox] I have read and accept the waiver conditions
[Continue to Registration Button]

**Full Waiver Text:** [Expandable Accordion with complete legal text]

---

### Page 3: POLICIES & FORMS (`/resources/policies`)

#### Use Tabs or Accordion for These Sections:

#### Tab 1: Refund Policy

**Administration Fee:** All refunds subject to $20.00 administration fee

**PREMIER LEAGUE Refunds:**
- **Valid Withdrawal Reasons:**
  - Could not place athlete on a team
  - Transfer out of area (at organization's discretion)
  - No teams practicing on available evenings
  
- **Timeline:**
  - 2+ weeks before start: Full refund (less $20) OR full credit
  - Within 1 week: 50% refund (less $20) OR full credit
  - After start: No refund, pro-rated credit may apply
  
**CAMPS Refunds:**
- 2+ weeks before: Full refund (less $20) OR full credit
- Within 2 weeks: 50% refund (less $20) OR full credit
- After start: No refund, pro-rated credit possible

**CLUB TEAMS:**
- No refunds after team commitments (first practice in December)
- Injured athletes: Remaining payments cancelled, merchandise fees still apply

**ADULT LEAGUE:**
- Refunds only if unable to place in tier
- No refunds after schedule posted
- Teams folding can use sub list

**Medical Withdrawals:** Pro-rated credit for documented medical issues

**All requests:** Email hello@volleyballfraservalley.ca

#### Tab 2: Terms of Service

**Key Sections:**
1. **Acceptance:** By using services, you agree to terms
2. **Eligibility:** 18+ or parental consent required
3. **Code of Conduct:** Respectful behavior required, violations may result in suspension
4. **Payments:** Due upon registration at posted rates
5. **Privacy:** Consent to data collection per Privacy Policy
6. **Intellectual Property:** All content property of Volleyball Fraser Valley
7. **Assumption of Risk:** Acknowledgment of inherent sports risks
8. **Modifications:** Terms may be updated with notice
9. **Governing Law:** Province of British Columbia, Canada
10. **Contact:** hello@volleyballfraservalley.ca | 403-510-1784

#### Tab 3: Privacy Policy

**Information Collected:**
- Contact details for players and families
- Team rosters, schedules, statistics
- Communication via platform
- Payment information for transactions
- Device information for security

**Information Use:**
- Provide and maintain services
- Send program updates and notifications
- Ensure security and prevent fraud
- Meet legal obligations

**Information Sharing:**
- Service providers for operations
- Within league community as appropriate
- Law enforcement as required
- Sport governing bodies when necessary

**Your Rights:**
- Unsubscribe from promotional emails
- Access and update account information
- Contact for privacy concerns

**Powered by:** SportsEngine (NBCUniversal Privacy Policy applies)

**Contact:** hello@volleyballfraservalley.ca | 403-510-1784

---

## STEP-BY-STEP EXECUTION:

1. **Update Navbar Dropdown:**
   - Edit `/app/components/shared/navbar.tsx` lines 68-74
   - Replace dummy items with new structure
   - Update icons to match content types

2. **Create Resources Overview Page:**
   - Build `/app/resources/page.tsx` with card grid
   - Link to three main subsections
   - Use existing motion animations

3. **Implement Membership Page:**
   - Create `/app/resources/membership/page.tsx`
   - Build comparison cards for membership tiers
   - Implement CTA buttons with registration links

4. **Build Support Page:**
   - Create `/app/resources/support/page.tsx`
   - Add subsidy application section with steps
   - Implement waiver acceptance UI
   - Link to downloadable PDF form

5. **Create Policies Page:**
   - Build `/app/resources/policies/page.tsx`
   - Implement tabs/accordion for policy sections
   - Format legal text for readability
   - Add contact CTAs at bottom

6. **Test & Verify:**
   - Check all responsive breakpoints
   - Verify links and downloads work
   - Test form interactions
   - Ensure consistent styling

## VALIDATION CHECKLIST:

□ Navbar dropdown updated with correct links and icons
□ All three resource pages created and accessible
□ Membership tiers displayed clearly with pricing
□ Subsidy form PDF link works correctly
□ Waiver acceptance UI functions properly
□ Policies are readable and well-formatted
□ All "Winnipeg" references replaced with "Fraser Valley"
□ Contact info (403-510-1784, hello@volleyballfraservalley.ca) consistent
□ Responsive design works on mobile and desktop
□ Animations and hover effects match existing pages
□ Page layouts follow established patterns
□ CTAs are prominent and functional
□ Legal text is properly formatted
□ Navigation between sections is smooth

## ERROR PREVENTION:

**Common Pitfalls:**
- Forgetting to update all Winnipeg references
- Inconsistent contact information
- Breaking responsive design patterns
- Not following existing animation styles
- Creating too many dropdown items
- Duplicating membership benefit content

**How to Avoid:**
- Search and replace all "Winnipeg" with "Fraser Valley"
- Use CONTACT constant for phone/email
- Test on multiple screen sizes
- Copy animation code from existing pages
- Limit to 3 main dropdown items
- Create reusable components for repeated content

## SUCCESS METRICS:

The task is complete when:
✓ Resources dropdown shows 3 real pages instead of dummy items
✓ All content from requirements is properly organized and displayed
✓ Fraser Valley branding is consistent throughout
✓ Pages follow existing design patterns exactly
✓ All interactive elements (forms, buttons, links) work correctly
✓ Mobile and desktop experiences are polished
✓ Legal/policy content is accessible and readable
✓ Contact information is accurate (403-510-1784, hello@volleyballfraservalley.ca)
✓ No console errors or warnings
✓ Page load performance is optimized
✓ All links and navigation work correctly