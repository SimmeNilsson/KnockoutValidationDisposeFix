# KnockoutValidationDisposeFix
Dispose when configured with live doesn't clean up subscriptions.

Reason seems to be a check against the live flag (but inverted) in dispose.
