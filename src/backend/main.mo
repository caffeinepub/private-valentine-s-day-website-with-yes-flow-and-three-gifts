import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import Set "mo:core/Set";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Map "mo:core/Map";

actor {
  type UserRole = AccessControl.UserRole;
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  // Data state outside of authorization
  let profiles = Map.empty<Principal, UserProfile>();

  // Query endpoint to get caller's own profile
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    profiles.get(caller);
  };

  // Query endpoint to get another user's profile (admin or self only)
  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    profiles.get(user);
  };

  // Shared endpoint to save caller's profile
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    profiles.add(caller, profile);
  };

  // Query endpoint to check if caller is allowlisted (has user role)
  public query ({ caller }) func isAllowlisted() : async Bool {
    AccessControl.hasPermission(accessControlState, caller, #user);
  };

  // Admin endpoint to add allowlisted members by granting user role
  public shared ({ caller }) func addAllowlistedMember(user : Principal) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add allowlisted members");
    };
    AccessControl.assignRole(accessControlState, caller, user, #user);
  };

  // Admin endpoint to remove allowlisted members by demoting to guest
  public shared ({ caller }) func removeAllowlistedMember(user : Principal) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can remove allowlisted members");
    };
    AccessControl.assignRole(accessControlState, caller, user, #guest);
  };

  // Query endpoint to check if a specific user is allowlisted
  public query ({ caller }) func isUserAllowlisted(user : Principal) : async Bool {
    AccessControl.hasPermission(accessControlState, user, #user);
  };
};
