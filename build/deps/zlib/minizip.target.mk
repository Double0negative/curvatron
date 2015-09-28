# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := minizip
DEFS_Debug := \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DUSE_FILE32API' \
	'-DDEBUG' \
	'-D_DEBUG'

# Flags passed to all source files.
CFLAGS_Debug := \
	-O0 \
	-gdwarf-2 \
	-mmacosx-version-min=10.5 \
	-arch i386 \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter \
	-Wno-parentheses-equality

# Flags passed to only C files.
CFLAGS_C_Debug := \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Debug := \
	-fno-rtti \
	-fno-exceptions \
	-fno-threadsafe-statics \
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Debug :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Debug :=

INCS_Debug := \
	-I/Users/xicombd/.nw-gyp/0.10.5/src \
	-I/Users/xicombd/.nw-gyp/0.10.5/deps/uv/include \
	-I/Users/xicombd/.nw-gyp/0.10.5/deps/v8/include \
	-I$(srcdir)/deps/zlib \
	-I$(srcdir)/.

DEFS_Release := \
	'-D_DARWIN_USE_64_BIT_INODE=1' \
	'-D_LARGEFILE_SOURCE' \
	'-D_FILE_OFFSET_BITS=64' \
	'-DUSE_FILE32API'

# Flags passed to all source files.
CFLAGS_Release := \
	-Os \
	-gdwarf-2 \
	-mmacosx-version-min=10.5 \
	-arch i386 \
	-Wall \
	-Wendif-labels \
	-W \
	-Wno-unused-parameter \
	-Wno-parentheses-equality

# Flags passed to only C files.
CFLAGS_C_Release := \
	-fno-strict-aliasing

# Flags passed to only C++ files.
CFLAGS_CC_Release := \
	-fno-rtti \
	-fno-exceptions \
	-fno-threadsafe-statics \
	-fno-strict-aliasing

# Flags passed to only ObjC files.
CFLAGS_OBJC_Release :=

# Flags passed to only ObjC++ files.
CFLAGS_OBJCC_Release :=

INCS_Release := \
	-I/Users/xicombd/.nw-gyp/0.10.5/src \
	-I/Users/xicombd/.nw-gyp/0.10.5/deps/uv/include \
	-I/Users/xicombd/.nw-gyp/0.10.5/deps/v8/include \
	-I$(srcdir)/deps/zlib \
	-I$(srcdir)/.

OBJS := \
	$(obj).target/$(TARGET)/deps/zlib/contrib/minizip/ioapi.o \
	$(obj).target/$(TARGET)/deps/zlib/contrib/minizip/unzip.o \
	$(obj).target/$(TARGET)/deps/zlib/contrib/minizip/zip.o

# Add to the list of files we specially track dependencies for.
all_deps += $(OBJS)

# CFLAGS et al overrides must be target-local.
# See "Target-specific Variable Values" in the GNU Make manual.
$(OBJS): TOOLSET := $(TOOLSET)
$(OBJS): GYP_CFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE))
$(OBJS): GYP_CXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE))
$(OBJS): GYP_OBJCFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_C_$(BUILDTYPE)) $(CFLAGS_OBJC_$(BUILDTYPE))
$(OBJS): GYP_OBJCXXFLAGS := $(DEFS_$(BUILDTYPE)) $(INCS_$(BUILDTYPE))  $(CFLAGS_$(BUILDTYPE)) $(CFLAGS_CC_$(BUILDTYPE)) $(CFLAGS_OBJCC_$(BUILDTYPE))

# Suffix rules, putting all outputs into $(obj).

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(srcdir)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

# Try building from generated source, too.

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj).$(TOOLSET)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

$(obj).$(TOOLSET)/$(TARGET)/%.o: $(obj)/%.c FORCE_DO_CMD
	@$(call do_cmd,cc,1)

# End of this set of suffix rules
### Rules for final target.
LDFLAGS_Debug := \
	-mmacosx-version-min=10.5 \
	-arch i386 \
	-L$(builddir)

LIBTOOLFLAGS_Debug :=

LDFLAGS_Release := \
	-mmacosx-version-min=10.5 \
	-arch i386 \
	-L$(builddir)

LIBTOOLFLAGS_Release :=

LIBS := \
	-undefined dynamic_lookup

$(builddir)/minizip.a: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(builddir)/minizip.a: LIBS := $(LIBS)
$(builddir)/minizip.a: GYP_LIBTOOLFLAGS := $(LIBTOOLFLAGS_$(BUILDTYPE))
$(builddir)/minizip.a: TOOLSET := $(TOOLSET)
$(builddir)/minizip.a: $(OBJS) FORCE_DO_CMD
	$(call do_cmd,alink)

all_deps += $(builddir)/minizip.a
# Add target alias
.PHONY: minizip
minizip: $(builddir)/minizip.a

# Add target alias to "all" target.
.PHONY: all
all: minizip

# Add target alias
.PHONY: minizip
minizip: $(builddir)/minizip.a

# Short alias for building this static library.
.PHONY: minizip.a
minizip.a: $(builddir)/minizip.a

# Add static library to "all" target.
.PHONY: all
all: $(builddir)/minizip.a
