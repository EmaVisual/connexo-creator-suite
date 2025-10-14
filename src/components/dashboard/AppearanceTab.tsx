import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import PhonePreview from "./PhonePreview";

const AppearanceTab = () => {
  const [appearance, setAppearance] = useState({
    profileImage: "",
    coverImage: "",
    title: "Your Name",
    bio: "Creative professional and digital enthusiast",
    bgType: "color",
    bgColor: "#210900",
    bgImage: "",
    buttonStyle: "rounded",
    buttonBgColor: "#ff6600",
    buttonTextColor: "#ffffff",
    buttonShadow: true,
    fontFamily: "Space Grotesk",
    textColor: "#ffffff",
  });

  const handleImageUpload = (field: "profileImage" | "coverImage", e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAppearance({ ...appearance, [field]: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
      {/* Editor Panel */}
      <div className="space-y-6">
        {/* Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Customize your profile appearance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Profile Picture</Label>
              <div className="flex items-center gap-4">
                {appearance.profileImage && (
                  <img src={appearance.profileImage} alt="Profile" className="h-16 w-16 rounded-full object-cover" />
                )}
                <Button variant="secondary" asChild>
                  <label className="cursor-pointer">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload("profileImage", e)}
                    />
                  </label>
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Cover Image</Label>
              <div className="flex items-center gap-4">
                {appearance.coverImage && (
                  <img src={appearance.coverImage} alt="Cover" className="h-16 w-32 rounded object-cover" />
                )}
                <Button variant="secondary" asChild>
                  <label className="cursor-pointer">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload("coverImage", e)}
                    />
                  </label>
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={appearance.title}
                onChange={(e) => setAppearance({ ...appearance, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={appearance.bio}
                onChange={(e) => setAppearance({ ...appearance, bio: e.target.value })}
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Background Section */}
        <Card>
          <CardHeader>
            <CardTitle>Background</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bgType">Type</Label>
              <Select value={appearance.bgType} onValueChange={(value) => setAppearance({ ...appearance, bgType: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="color">Solid Color</SelectItem>
                  <SelectItem value="image">Image</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {appearance.bgType === "color" ? (
              <div className="space-y-2">
                <Label htmlFor="bgColor">Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="bgColor"
                    type="color"
                    value={appearance.bgColor}
                    onChange={(e) => setAppearance({ ...appearance, bgColor: e.target.value })}
                    className="h-10 w-20"
                  />
                  <Input
                    value={appearance.bgColor}
                    onChange={(e) => setAppearance({ ...appearance, bgColor: e.target.value })}
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <Label>Background Image</Label>
                <Button variant="secondary" asChild className="w-full">
                  <label className="cursor-pointer">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Image
                    <input type="file" accept="image/*" className="hidden" />
                  </label>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Button Styles */}
        <Card>
          <CardHeader>
            <CardTitle>Button Style</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Style</Label>
              <Select value={appearance.buttonStyle} onValueChange={(value) => setAppearance({ ...appearance, buttonStyle: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rectangular">Rectangular</SelectItem>
                  <SelectItem value="rounded">Rounded</SelectItem>
                  <SelectItem value="pill">Pill</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Background</Label>
                <Input
                  type="color"
                  value={appearance.buttonBgColor}
                  onChange={(e) => setAppearance({ ...appearance, buttonBgColor: e.target.value })}
                  className="h-10"
                />
              </div>
              <div className="space-y-2">
                <Label>Text Color</Label>
                <Input
                  type="color"
                  value={appearance.buttonTextColor}
                  onChange={(e) => setAppearance({ ...appearance, buttonTextColor: e.target.value })}
                  className="h-10"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography */}
        <Card>
          <CardHeader>
            <CardTitle>Typography</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Font Family</Label>
              <Select value={appearance.fontFamily} onValueChange={(value) => setAppearance({ ...appearance, fontFamily: value })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Space Grotesk">Space Grotesk</SelectItem>
                  <SelectItem value="Tomorrow">Tomorrow</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Text Color</Label>
              <Input
                type="color"
                value={appearance.textColor}
                onChange={(e) => setAppearance({ ...appearance, textColor: e.target.value })}
                className="h-10"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Preview Panel */}
      <div className="lg:sticky lg:top-24 h-fit">
        <PhonePreview appearance={appearance} />
      </div>
    </div>
  );
};

export default AppearanceTab;
