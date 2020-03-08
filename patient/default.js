var defaultConfig = {
  "resourceType" : "Patient",
  "identifier" : [
    {
      "system": "https://medblocks.org",
      "value": "emailid@gmail.com"
    }
  ], // An identifier for this patient
  "active" : true, // Whether this patient's record is in active use
  "name" : [
    {
        "use" : "usual", // usual | official | temp | nickname | anonymous | old | maiden
        "text" : "<firstname>", // Text representation of the full name
      }
      ], // A name associated with the patient
  "telecom" : [
      {
          "system" : "phone", // C? phone | fax | email | pager | url | sms | other
            "value" : "<string>",
        }
  ], // A contact detail for the individual
  "gender" : "<code>", // male | female | other | unknown
  "birthDate" : "<date>", // The date of birth for the individual
  // deceased[x]: Indicates if the individual is deceased or not. One of these 2:   
  "address" : [{
    // from Element: extension
    "use" : "home", // home | work | temp | old | billing - purpose of this address
    "type" : "both", // postal | physical | both
    "text" : "<string>", // Text representation of the address
    "line" : ["<string>"], // Street name, number, direction & P.O. Box etc.
    "city" : "<string>", // Name of city, town etc.
    "district" : "<string>", // District name (aka county)
    "state" : "<string>", // Sub-unit of country (abbreviations ok)
    "postalCode" : "<string>", // Postal code for area
    "country" : "IN", // Country (e.g. can be ISO 3166 2 or 3 letter code)
    "period" : { Period } // Time period when address was/is in use
  }], // An address for the individual
  "contact" : [{ // A contact party (e.g. guardian, partner, friend) for the patient
    "relationship" : [{ CodeableConcept }], // The kind of relationship
    "name" : { HumanName }, // A name associated with the contact person
    "telecom" : [{ ContactPoint }], // A contact detail for the person
    "address" : { Address }, // Address for the contact person
    "gender" : "<code>", // male | female | other | unknown
    "organization" : { Reference(Organization) }, // C? Organization that is associated with the contact
    "period" : { Period } // The period during which this contact person or organization is valid to be contacted relating to this patient
  }],
  "communication" : [{ // A language which may be used to communicate with the patient about his or her health
    "language" : { CodeableConcept }, // R!  The language which can be used to communicate with the patient about his or her health
    "preferred" : true // Language preference indicator
  }],
  "link" : [{ // Link to another patient resource that concerns the same actual person
    "other" : { Reference(Patient|RelatedPerson) }, // R!  The other patient or related person resource that the link refers to
    "type" : "<code>" // R!  replaced-by | replaces | refer | seealso
  }]
}