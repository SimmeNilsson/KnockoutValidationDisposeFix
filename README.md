# KnockoutValidationDisposeFix
Dispose when configured with live doesn't clean up subscriptions
Reasons seems to be a check against the live flag (but inverted) in dispose.
